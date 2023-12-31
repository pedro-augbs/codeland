import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Todo List",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${montserrat.variable}`}>
			<body className="flex flex-col min-h-screen bg-foreground text-white">
				{children}
			</body>
		</html>
	);
}
