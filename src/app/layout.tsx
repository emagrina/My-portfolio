import './globals.css'
import {NavBar} from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
    title: 'Ernest Magriñá',
    description: 'Portfolio Ernest Magriñá',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
                <html lang="es">
                <head>
                    <link rel="icon"
                          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❄️</text></svg>"/>
                    <meta name="google-site-verification" content="WfjPr_cXrasjzEXiotMANJilWsfhd20YAxWbSR258e0" />
                </head>
                <body>
                <NavBar/>
                {children}
                </body>
                </html>
            <Analytics/>

        </>

    )
}