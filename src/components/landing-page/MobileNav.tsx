"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FacebookIcon, InstagramIcon, MobileMenu } from "@/assets/icons";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function MobileNav() {
	const pathName = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="cursor-pointer md:hidden">
					<Image src={MobileMenu} alt="mobile-menu" />
				</button>
			</SheetTrigger>
			<SheetContent>
				<div className="mt-5">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
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
								href="/services"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/services"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								Our Services
							</Link>
							<Link
								href="/testimonials"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/testimonials"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								Testimonials
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
								href="/contact"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/contact"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								Get in touch
							</Link>
						</div>
						<Button
							btnType="button"
							btnStyles="bg-customGreen w-[150px] hover:bg-lightGreen py-2 rounded-3xl text-white cursor-pointer"
							btnContent="Book service"
						/>
					</div>
					<div className="mt-5">
						<h2>socials</h2>
						<div className="flex items-center gap-4">
							<Link href="/">
								<Image src={FacebookIcon} alt="facebook" />
							</Link>
							<Link href="/">
								<Image src={InstagramIcon} alt="facebook" />
							</Link>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
