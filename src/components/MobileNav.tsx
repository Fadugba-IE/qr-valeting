"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FacebookIcon, InstagramIcon, MobileMenu } from "@/assets/icons";

export default function MobileNav() {
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
							<Link href="/" className="text-customBlack">
								Home
							</Link>
							<Link href="/" className="text-customBlack">
								Our Services
							</Link>
							<Link href="/" className="text-customBlack">
								Testimonials
							</Link>
							<Link href="/" className="text-customBlack">
								About us
							</Link>
							<Link href="/" className="text-customBlack">
								Get in touch
							</Link>
						</div>
						<button className="bg-customGreen w-[150px] hover:bg-lightGreen py-2 rounded-3xl text-white cursor-pointer">
							Book service
						</button>
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
