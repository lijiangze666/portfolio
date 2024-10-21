import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/app/providers";
import {Noto_Sans} from "next/font/google";

const noto = Noto_Sans({subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
    title: "Leejz's Portfolio",
    description: "Leejz's Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={noto.className}>
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
