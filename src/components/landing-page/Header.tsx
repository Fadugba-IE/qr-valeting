"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLogo } from "@/assets/icons";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Button from "./Button";

export default function Header() {
	const pathName = usePathname();

	return (
		<div className="w-full shadow-md px-14 py-2 flex items-center justify-between fixed z-10 bg-white">
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
						className={`font-medium hover:text-lightGreen ${
							pathName === "/about"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						About us
					</Link>
					<Link
						href="/services"
						className={`font-medium hover:text-lightGreen ${
							pathName === "/services"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						Services
					</Link>
				</div>
				<Button
					btnStyles="bg-customGreen hover:bg-lightGreen px-4 py-2 rounded-3xl text-white cursor-pointer"
					btnType="button"
					btnContent="Book service"
				/>
			</div>
			<MobileNav />
		</div>
	);
}
