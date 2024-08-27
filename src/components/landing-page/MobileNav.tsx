"use client";
import Image from "next/image";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { FacebookIcon, InstagramIcon, MobileMenu } from "@/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@radix-ui/react-dialog";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { DialogFooter, DialogHeader } from "../ui/dialog";

export default function MobileNav() {
	const pathName = usePathname();
	const router = useRouter();

	const { userData, isLoading, setIsLoading } = useContext(AuthContext);

	async function logoutUser() {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/logout",
				{ method: "POST" }
			);
			console.log(response);
			if (response.status === 200) {
				localStorage.removeItem("user");
				window.location.href = "/";
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}
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
								href="/#home"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/#home"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								<SheetClose>Home</SheetClose>
							</Link>
							<Link
								href="/#services"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/#services"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								<SheetClose>Our Services</SheetClose>
							</Link>
							<Link
								href="/#testimonials"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/#testimonials"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								<SheetClose>Testimonials</SheetClose>
							</Link>
							<Link
								href="/#about"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/#about"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								<SheetClose>About us</SheetClose>
							</Link>
							<Link
								href="/#contact"
								className={`font-medium hover:text-lightGreen ${
									pathName === "/#contact"
										? "text-customGreen"
										: "text-customBlack"
								}`}
							>
								<SheetClose>Get in touch</SheetClose>
							</Link>
						</div>
						{userData ? (
							<>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<div className="flex items-center gap-2">
											<CircleUserRound className="text-customGreen h-8 w-8" />
											<div className="flex flex-col cursor-pointer">
												<h1 className="text-[12px] font-semibold">
													{userData?.first_name}
												</h1>
												<p className="text-left text-[10px]">
													{userData?.role_name}
												</p>
											</div>
										</div>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<Dialog>
											<DialogTrigger asChild>
												<DropdownMenuLabel className="text-center cursor-pointer">
													LogOut
												</DropdownMenuLabel>
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px] text-center">
												<DialogHeader>
													<DialogTitle className="text-center text-xl md:text-2xl">
														Are you sure you want to
														logout?
													</DialogTitle>
												</DialogHeader>
												<DialogFooter>
													<div className="w-full flex items-center justify-around">
														<div className="flex items-center gap-4">
															<Button
																btnContent={
																	isLoading
																		? "Signing out..."
																		: "Yes"
																}
																btnStyles="bg-customGreen border-none hover:bg-lightGreen text-white rounded-lg cursor-pointer py-2 px-6"
																btnType="button"
																handleSubmit={() =>
																	logoutUser()
																}
															/>
															<DialogClose>
																<Button
																	btnContent="Cancel"
																	btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-lg cursor-pointer py-2 px-6"
																	btnType="button"
																/>
															</DialogClose>
														</div>
													</div>
												</DialogFooter>
											</DialogContent>
										</Dialog>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						) : (
							<Button
								btnType="button"
								btnStyles="bg-customGreen w-[150px] hover:bg-lightGreen py-2 rounded-3xl text-white cursor-pointer"
								btnContent="Book service"
								handleSubmit={() =>
									router.push("/book-service")
								}
							/>
						)}
					</div>
					<div className="mt-5">
						<h2>socials</h2>
						<div className="flex items-center gap-4">
							<Link href="/">
								<Image src={FacebookIcon} alt="facebook" />
							</Link>
							<Link href="/">
								<Image src={InstagramIcon} alt="instagram" />
							</Link>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
