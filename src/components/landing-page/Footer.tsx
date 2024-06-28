import { FooterIcon, WhiteFacebookIcon, WhiteIgIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-customGreen h-auto text-white w-full flex flex-col md:flex-row justify-around md:justify-between px-20 py-12">
			<Image src={FooterIcon} alt="footer-icon" />
			<div className="flex flex-col md:flex-row gap-14 md:gap-20 mb-20">
				<div>
					<h2 className="text-2xl font-semibold">Menu</h2>
					<div className="flex flex-col gap-3 mt-2 md:mt-5">
						<Link href="/">Home</Link>
						<Link href="/about-us">About us</Link>
						<Link href="/services">Our Services</Link>
						<Link href="/contact">Contact us</Link>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Account</h2>
					<div className="flex flex-col gap-3 mt-2 md:mt-5">
						<Link href="/">Log in</Link>
						<Link href="/about-us">Sign up</Link>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Follow us</h2>
					<div className="flex gap-3 mt-2 md:mt-5">
						<Link href="/">
							<Image
								src={WhiteFacebookIcon}
								alt="facebook-icon"
							/>
						</Link>
						<Link href="/">
							<Image src={WhiteIgIcon} alt="instagram-icon" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
