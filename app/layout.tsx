// import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/app/providers";
import {Open_Sans} from "next/font/google";
import Head from "next/head";
const open = Open_Sans({subsets: ["latin"], weight: ["400", "700"]});

// export const metadata: Metadata = {
//     title: "Leejz's Portfolio",
//     description: "Leejz's Portfolio",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <title>Leejz&rsquo;s Portfolio</title>
            <meta name="description" content="Leejz's Portfolio"/>
            <link rel="icon" href="/logo.png" sizes="any"/>
        </Head>
        <body className={open.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
