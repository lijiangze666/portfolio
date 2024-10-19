import type {Metadata} from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";


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
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
