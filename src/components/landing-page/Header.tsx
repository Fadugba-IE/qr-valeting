"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, NavLogo } from "@/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import Button from "./Button";
import { AuthContext } from "@/context/AuthContext";
import { CircleUserRound } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

export default function Header() {
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
		<div className="w-full shadow-md px-8 md:px-14 py-2 flex items-center justify-between fixed z-10 bg-white">
			<Link href="/">
				<Image src={NavLogo} alt="logo" />
			</Link>
			<div className="hidden md:flex items-center gap-14">
				<div className="flex items-center gap-8">
					<Link
						href="/#home"
						className={`font-medium hover:text-lightGreen ${
							pathName === "/#home"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						Home
					</Link>
					<Link
						href="/#about"
						className={`font-medium hover:text-lightGreen ${
							pathName === "/#about"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						About us
					</Link>
					<Link
						href="/#services"
						className={`font-medium hover:text-lightGreen ${
							pathName === "/#services"
								? "text-customGreen"
								: "text-customBlack"
						}`}
					>
						Services
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
												Are you sure you want to logout?
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
						btnStyles="bg-customOrange hover:bg-lightGreen px-4 py-2 rounded-3xl text-white cursor-pointer"
						btnType="button"
						btnContent="Book service"
						handleSubmit={() => router.push("/book-service")}
					/>
				)}
			</div>
			<MobileNav />
		</div>
	);
}
