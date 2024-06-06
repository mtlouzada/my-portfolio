import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
        <div>
          <h1>Hi, I´m Matheus! 🛹</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
        
        <div className="experience">
          <h3>Experience</h3>
          <p>texto</p>
        </div>

    </main>
  );
}
