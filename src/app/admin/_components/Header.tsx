"use client";
import React, { useContext, useState } from "react";
import { CircleUserRound, Search } from "lucide-react";
import Image from "next/image";
import { Camera, Dropdown } from "@/assets/icons";
import { AuthContext } from "@/context/AuthContext";

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
import Button from "@/components/landing-page/Button";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import QrScanner from "./QrScanner";

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		userData,
		searchBookingsText,
		setSearchBookingsText,
		isLoading,
		setIsLoading,
	} = useContext(AuthContext);

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
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	}

	const handleScanSuccess = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="w-full h-auto md:h-[12%] bg-white border py-2 px-6 flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center justify-between">
			<div className="bg-[#F5F6FA] px-4 py-2 flex items-center gap-3 rounded-[30px] cursor-pointer">
				<Search className="text-[#202224] h-4 w-4" />
				<input
					type="text"
					placeholder="Search..."
					className="w-[200px] md:w-[300px] text-sm bg-[#F5F6FA] outline-none placeholder:text-[#202224]"
					value={searchBookingsText}
					onChange={(e) => setSearchBookingsText(e.target.value)}
				/>
			</div>
			<div className="flex items-center gap-4">
				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogTrigger asChild>
						<Image
							src={Camera}
							alt="camera-icon"
							className="cursor-pointer"
						/>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px] text-center">
						<DialogHeader>
							<DialogTitle className="text-center text-xl md:text-2xl">
								Scan Customer's QR Code
							</DialogTitle>
						</DialogHeader>
						<QrScanner handleScanSuccess={handleScanSuccess} />
					</DialogContent>
				</Dialog>
				<CircleUserRound className="h-6 w-6 text-customGreen" />
				<div className="flex flex-col cursor-pointer">
					<h1 className="text-[12px] font-semibold">
						{userData?.first_name}
					</h1>
					<p className="text-[10px]">{userData?.role_name}</p>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Image
							src={Dropdown}
							alt="dropdown-icon"
							className="h-8 w-8 cursor-pointer"
						/>
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
													// handleSubmit={() => router.push("/book-service")}
												/>
											</DialogClose>
										</div>
									</div>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
