import type { Metadata } from "next";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export const metadata: Metadata = {
	title: "Vale Valteing Service",
	description: "Generated by create next app",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen w-full flex items-center">
			<Sidebar />
			<div className="w-full h-screen flex flex-col">
				<Header />
				<div className="">{children}</div>
			</div>
		</div>
	);
}
