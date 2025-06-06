import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '../contexts/ModalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMS Brandname & ZNS - Huy Tiến Technology Solutions',
  description: 'CÔNG TY TNHH DỊCH VỤ TƯ VẤN VÀ GIẢI PHÁP CÔNG NGHỆ HUY TIẾN - Dịch vụ SMS Brandname và ZNS chuyên nghiệp, giúp doanh nghiệp kết nối hiệu quả với khách hàng.',
  keywords: 'SMS Brandname, ZNS, Zalo Notification Service, tin nhắn thương hiệu, SMS Marketing, Huy Tiến Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
