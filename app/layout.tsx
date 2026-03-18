import type {Metadata} from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoTabsJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: '木漏れ日カフェ | 日常を忘れる、穏やかな時間',
  description: '厳選された豆で淹れる一杯と、季節を感じる手作りスイーツ。木のぬくもりに包まれた空間で、心ゆくまでおくつろぎください。',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja" className={`${notoTabsJP.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#3E2723] bg-[#FDFBF7]">{children}</body>
    </html>
  );
}
