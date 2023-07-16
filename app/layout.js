import './globals.css'

import localFont from 'next/font/local'
const ppNeue = localFont({ src: '../public/fonts/ppneueregular.woff2' })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={ppNeue.className}>{children}</body>
        </html>
    )
}
