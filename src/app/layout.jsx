import './globals.css'

export const metadata = {
    title: 'Google Clone',
    description: 'This is google clone created by Next js',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className=''>{children}</body>
        </html>
    )
}
