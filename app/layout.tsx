import type {Metadata} from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/providers";
import { Inter,Rethink_Sans } from "next/font/google";
const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

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
        <html lang="en" suppressHydrationWarning >
        <body className={rethinkSans.className}>
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
