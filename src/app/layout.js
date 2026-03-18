import './globals.css'
import localFont from 'next/font/local'
import Header from '../components/Header';

const geist = localFont({
  src: [
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
})

const geistMono = localFont({
  src: [
    {
      path: '../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'DUOLAB | IA + Web de Alta Performance',
  description: 'Agentes de IA que vendem. Sites que convertem. A fusao entre inteligencia artificial e desenvolvimento web de alta performance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
