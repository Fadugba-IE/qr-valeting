"use client";
import React, { useContext } from "react";
import { CircleUserRound, Search } from "lucide-react";
import Image from "next/image";
import { Camera, Dropdown } from "@/assets/icons";
import { AuthContext } from "@/context/AuthContext";

export default function Header() {
	const { userData } = useContext(AuthContext);
	return (
		<div className="w-full h-[12%] bg-white border py-2 px-6 flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center justify-between">
			<div className="bg-[#F5F6FA] px-4 py-2 flex items-center gap-3 rounded-[30px] cursor-pointer">
				<Search className="text-[#202224] h-4 w-4" />
				<input
					type="text"
					placeholder="Search..."
					className="w-[200px] md:w-[300px] text-sm bg-[#F5F6FA] outline-none placeholder:text-[#202224]"
				/>
			</div>
			<div className="flex items-center gap-4">
				<Image
					src={Camera}
					alt="camera-icon"
					className="cursor-pointer"
				/>
				<CircleUserRound />
				<div className="flex flex-col cursor-pointer">
					<h1 className="text-[12px] font-semibold">
						{userData?.first_name}
					</h1>
					<p className="text-[10px]">{userData?.role_name}</p>
				</div>
				<button className="cursor-pointer">
					<Image
						src={Dropdown}
						alt="dropdown-icon"
						className="h-8 w-8"
					/>
				</button>
			</div>
		</div>
	);
}
