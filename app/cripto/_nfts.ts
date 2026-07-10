import "server-only";

import { nfts as placeholderNfts, type Nft } from "./_data";

/* Live NFT gallery for the onchain world.
   Reads the louzoshi.eth wallet through Alchemy's NFT API (server-side, so the
   key never reaches the browser). Any failure — missing key, network error,
   empty wallet — falls back to the placeholder grid so the page never breaks.

   Env (.env.local):
     ALCHEMY_API_KEY       required to go live
     CRIPTO_WALLET         0x address (preferred) or ENS name; default louzoshi.eth
     ALCHEMY_NFT_NETWORKS  comma list, default "eth-mainnet,base-mainnet,zora-mainnet" */

export type Gallery = { items: Nft[]; isLive: boolean };

const KEY = process.env.ALCHEMY_API_KEY?.trim();
const OWNER = process.env.CRIPTO_WALLET?.trim() || "louzoshi.eth";
const DEFAULT_NETWORKS = ["eth-mainnet", "base-mainnet", "zora-mainnet"];
const MAX_ITEMS = 8;
const REVALIDATE_SECONDS = 3600;

// Cycled through the cards so the brutalist frames keep their colour rhythm.
const BG_CYCLE = ["--c-red", "--c-teal", "--c-blue", "--c-lime"];

// OpenSea chain slugs for the "view" link (networks without one get no href).
const OPENSEA_SLUG: Record<string, string> = {
  "eth-mainnet": "ethereum",
  "base-mainnet": "base",
  "zora-mainnet": "zora",
  "opt-mainnet": "optimism",
  "arb-mainnet": "arbitrum",
  "polygon-mainnet": "matic",
};

const CHAIN_LABEL: Record<string, string> = {
  "eth-mainnet": "ethereum",
  "base-mainnet": "base",
  "zora-mainnet": "zora",
  "opt-mainnet": "optimism",
  "arb-mainnet": "arbitrum",
  "polygon-mainnet": "polygon",
};

// ENS name NFTs (registrar + name wrapper) — onchain identity, not gallery art.
const HIDDEN_CONTRACTS = new Set([
  "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", // ENS: Base Registrar (.eth)
  "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401", // ENS: Name Wrapper
]);

const isAddress = (v: string) => /^0x[a-fA-F0-9]{40}$/.test(v);

function networks(): string[] {
  const raw = process.env.ALCHEMY_NFT_NETWORKS?.trim();
  const list = raw
    ? raw.split(",").map((s) => s.trim()).filter(Boolean)
    : DEFAULT_NETWORKS;
  // ENS only resolves on mainnet, so an ENS owner limits us to eth-mainnet.
  // A raw 0x address works everywhere — use the full network list then.
  return isAddress(OWNER) ? list : ["eth-mainnet"];
}

type AlchemyImage = {
  cachedUrl?: string;
  thumbnailUrl?: string;
  pngUrl?: string;
  originalUrl?: string;
};

type AlchemyNft = {
  contract: {
    address: string;
    name?: string;
    isSpam?: boolean;
    openSeaMetadata?: { collectionName?: string; imageUrl?: string };
  };
  tokenId: string;
  name?: string;
  image?: AlchemyImage;
  collection?: { name?: string };
};

function ipfsToHttp(url: string): string {
  if (url.startsWith("ipfs://")) {
    return `https://ipfs.io/ipfs/${url.slice(7).replace(/^ipfs\//, "")}`;
  }
  return url;
}

function pickImage(n: AlchemyNft): string | undefined {
  const img = n.image ?? {};
  const candidate =
    img.thumbnailUrl ||
    img.cachedUrl ||
    img.pngUrl ||
    img.originalUrl ||
    n.contract.openSeaMetadata?.imageUrl;
  return candidate ? ipfsToHttp(candidate) : undefined;
}

async function fetchNetwork(network: string): Promise<Nft[]> {
  const params = new URLSearchParams({
    owner: OWNER,
    withMetadata: "true",
    pageSize: "100",
  });
  // NOTE: do NOT pass excludeFilters[]=SPAM here — that param returns a 500 on
  // Base (base-mainnet). Spam is dropped below via contract.isSpam instead,
  // which withMetadata=true already populates on every chain.
  const url =
    `https://${network}.g.alchemy.com/nft/v3/${KEY}/getNFTsForOwner` +
    `?${params.toString()}`;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`${network}: ${res.status}`);

  const data = (await res.json()) as { ownedNfts?: AlchemyNft[] };
  const owned = data.ownedNfts ?? [];

  return owned.flatMap((n): Nft[] => {
    if (n.contract.isSpam) return [];
    if (HIDDEN_CONTRACTS.has(n.contract.address.toLowerCase())) return [];
    const image = pickImage(n);
    if (!image) return []; // skip broken / metadata-less items

    const collection =
      n.collection?.name ||
      n.contract.openSeaMetadata?.collectionName ||
      n.contract.name ||
      "Onchain";
    const slug = OPENSEA_SLUG[network];
    const href = slug
      ? `https://opensea.io/assets/${slug}/${n.contract.address}/${n.tokenId}`
      : undefined;

    return [
      {
        name: n.name?.trim() || `${collection} #${n.tokenId}`,
        collection,
        tokenId: n.tokenId,
        bg: "--c-red", // overwritten by the colour cycle below
        image,
        href,
        chain: CHAIN_LABEL[network] ?? network.replace(/-mainnet$/, ""),
      },
    ];
  });
}

export async function getGallery(): Promise<Gallery> {
  if (!KEY) return { items: placeholderNfts, isLive: false };

  const results = await Promise.allSettled(networks().map(fetchNetwork));
  const items = results.flatMap((r) =>
    r.status === "fulfilled" ? r.value : [],
  );

  if (items.length === 0) return { items: placeholderNfts, isLive: false };

  const trimmed = items
    .slice(0, MAX_ITEMS)
    .map((n, i) => ({ ...n, bg: BG_CYCLE[i % BG_CYCLE.length] }));

  return { items: trimmed, isLive: true };
}
