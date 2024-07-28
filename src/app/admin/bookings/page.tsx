"use client";
import { Booking, BookingWhite, Time, TimeWhite } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingsTable from "./_components/bookings-data/page";

export default function Bookings() {
	const pathname = usePathname();

	return (
		<div className="h-[90vh] w-full bg-[#F5F6FA] px-4 md:px-10 pt-5 pb-10 overflow-y-scroll">
			<div className="flex md:hidden w-full items-center gap-2">
				<Link href="/admin" className="w-1/2 flex cursor-pointer">
					<div
						className={cn(
							"rounded-md p-2 w-full flex items-center gap-3",
							pathname === "/admin"
								? "bg-customGreen text-white"
								: "bg-white text-black hover:bg-gray-200"
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
					className="flex w-1/2 cursor-pointer"
				>
					<div
						className={cn(
							" w-full rounded-md p-2  flex items-center gap-3",
							pathname === "/admin/bookings"
								? "bg-customGreen text-white"
								: "bg-white text-black hover:bg-gray-200"
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
			<h1 className="mt-4 font-semibold text-2xl">Bookings</h1>
			<BookingsTable />
		</div>
	);
}
