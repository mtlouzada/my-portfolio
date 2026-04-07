import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Matheus Louzada | Desenvolvedor .NET Fullstack',
  description:
    'Portfolio de Matheus Louzada — Desenvolvedor .NET Fullstack com experiência em C#, ASP.NET Core, React e SQL Server.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Raleway:ital,wght@1,900&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('chakra-ui-color-mode');if(!m)document.documentElement.style.colorScheme='dark'}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
