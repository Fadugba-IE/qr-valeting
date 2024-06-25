"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLogo } from "@/assets/icons";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

export default function Header() {
	const pathName = usePathname();

	return (
		<div className="w-full shadow-sm px-12 py-2 flex items-center justify-between">
			<Link href="/">
				<Image src={NavLogo} alt="logo" />
			</Link>
			<div className="hidden md:flex items-center gap-14">
				<div className="flex items-center gap-8">
					<Link
						href="/"
						className={`font-medium hover:text-lightGreen ${
							pathName === "/"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-customBlack font-medium"
					>
						About us
					</Link>
					<Link
						href="/services"
						className="text-customBlack font-medium"
					>
						Services
					</Link>
				</div>
				<button className="bg-customGreen hover:bg-lightGreen px-4 py-2 rounded-3xl text-white cursor-pointer">
					Book service
				</button>
			</div>
			<MobileNav />
		</div>
	);
}
