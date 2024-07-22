"use client";
import {
	Booking,
	BookingWhite,
	NavLogo,
	Power,
	Time,
	TimeWhite,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	return (
		<div className="hidden md:flex h-screen w-[20%] bg-white flex-col justify-between pb-20">
			<div className="">
				<div className="flex justify-center h-[65px]">
					<Image src={NavLogo} alt="logo" priority />
				</div>
				<div className="flex flex-col gap-2">
					<Link
						href="/admin"
						className="bg-white flex gap-4 cursor-pointer"
					>
						<div
							className={cn(
								"h-[40px] w-1 rounded-r-lg ",
								pathname === "/admin"
									? "bg-customGreen"
									: "bg-gray-100 hover:bg-gray-200"
							)}
						></div>
						<div
							className={cn(
								"h-[40px] w-[180px] rounded-md py-2 px-4  flex items-center gap-3",
								pathname === "/admin"
									? "bg-customGreen text-white"
									: "bg-gray-100 text-black hover:bg-gray-200"
							)}
						>
							<Image
								src={pathname === "/admin" ? TimeWhite : Time}
								alt="dashboard-icon"
							/>
							<p className="text-sm">Dashboard</p>
						</div>
					</Link>
					<Link
						href="/admin/bookings"
						className="bg-white flex gap-4 cursor-pointer"
					>
						<div
							className={cn(
								"h-[40px] w-1 rounded-r-lg ",
								pathname === "/admin/bookings"
									? "bg-customGreen"
									: "bg-gray-100 hover:bg-gray-200"
							)}
						></div>
						<div
							className={cn(
								"h-[40px] w-[180px] rounded-md py-2 px-4  flex items-center gap-3",
								pathname === "/admin/bookings"
									? "bg-customGreen text-white"
									: "bg-gray-100 text-black hover:bg-gray-200"
							)}
						>
							<Image
								src={
									pathname === "/admin/bookings"
										? BookingWhite
										: Booking
								}
								alt="dashboard-icon"
							/>
							<p className="text-sm">Bookings</p>
						</div>
					</Link>
				</div>
			</div>
			<div className="bg-white flex gap-4 cursor-pointer">
				<div
					className={cn(
						"h-[40px] w-1 rounded-r-lg bg-gray-100 hover:bg-gray-200"
					)}
				></div>
				<div
					className={cn(
						"h-[40px] w-[180px] rounded-md py-2 px-4  flex items-center gap-3 bg-gray-100 text-black hover:bg-gray-200"
					)}
				>
					<Image src={Power} alt="dashboard-icon" />
					<p className="text-sm">Logout</p>
				</div>
			</div>
		</div>
	);
}
