import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://komarovo.by'), // базовый URL сайта
  title: {
    default: 'Усадьба Комарово — банный комплекс в Витебске',
    template: '%s | Усадьба Комарово'
  },
  description: 'Баня на дровах, гидромассажный бассейн, мангал, банкетный зал и услуги банщика. Идеально для семей, пар и компаний друзей в Витебске.',
  icons: {
    icon: [
      {url: '/favicon.ico', sizes: 'any'},
      {url: '/icons/icon-16x16.png', type: 'image/png', sizes: '16x16'},
      {url: '/icons/icon-32x32.png', type: 'image/png', sizes: '32x32'},
    ],
    apple: [
      {url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png'},
    ],
    other: [
      {rel: 'manifest', url: '/manifest.json'},
    ],
  },
  keywords: [
    'банный комплекс Витебск',
    'баня на дровах',
    'гидромассажный бассейн',
    'аренда банкетного зала',
    'мангал Витебск',
    'отдых Витебск',
  ],

  openGraph: {
    type: 'website',
    url: 'https://komarovo.by',
    title: 'Усадьба Комарово — банный комплекс в Витебске',
    description: 'Баня на дровах, бассейн, мангал, банкетный зал и услуги банщика. Отдых в Витебске для семей, пар и компаний.',
    siteName: 'Усадьба Комарово',
    images: [
      {
        url: '/og-image.jpg', // 1200x630
        width: 1200,
        height: 630,
        alt: 'Усадьба Комарово — банный комплекс в Витебске'
      }
    ],
  },

  alternates: {
    canonical: 'https://komarovo.by',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
