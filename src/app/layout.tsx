import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Vale Valteing Service",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={poppins.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
