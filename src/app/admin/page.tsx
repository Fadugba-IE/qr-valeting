"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Booking, BookingWhite, Time, TimeWhite } from "@/assets/icons";

const chartConfig = {
	bookings: {
		label: "bookings",
		color: "#007148",
	},
} satisfies ChartConfig;

const AdminDashboard = () => {
	const pathname = usePathname();
	const chartData = [
		{ month: "January", bookings: 186 },
		{ month: "February", bookings: 305 },
		{ month: "March", bookings: 237 },
		{ month: "April", bookings: 73 },
		{ month: "May", bookings: 209 },
		{ month: "June", bookings: 414 },
		{ month: "July", bookings: 314 },
		{ month: "August", bookings: 214 },
		{ month: "September", bookings: 614 },
		{ month: "October", bookings: 314 },
		{ month: "November", bookings: 414 },
		{ month: "December", bookings: 214 },
	];

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
			<h1 className="mt-4 font-semibold text-2xl">Dashboard</h1>
			<Card className="mt-5 h-auto">
				<CardHeader>
					<CardTitle>Total Booking Count</CardTitle>
					<CardDescription>January - December 2024</CardDescription>
				</CardHeader>
				<CardContent className="h-auto">
					<ChartContainer config={chartConfig}>
						<LineChart
							accessibilityLayer
							data={chartData}
							margin={{
								left: 12,
								right: 12,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="month"
								tickLine={false}
								axisLine={false}
								tickMargin={1}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Line
								dataKey="bookings"
								type="monotone"
								stroke="#007148"
								strokeWidth={2}
								dot={{
									fill: "#007148",
								}}
								activeDot={{
									r: 6,
								}}
							/>
						</LineChart>
					</ChartContainer>
					<div className="mt-4 leading-none text-muted-foreground flex items-center gap-2 text-sm">
						Showing total bookings for the year
						<TrendingUp className="h-4 w-4" />
					</div>
				</CardContent>
			</Card>
			<Card className="mt-10 h-auto">
				<CardHeader>
					<CardTitle>Total Income</CardTitle>
					<CardDescription>January - December 2024</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<LineChart
							accessibilityLayer
							data={chartData}
							margin={{
								left: 12,
								right: 12,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="month"
								tickLine={false}
								axisLine={false}
								tickMargin={1}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Line
								dataKey="bookings"
								type="monotone"
								stroke="#007148"
								strokeWidth={2}
								dot={{
									fill: "#007148",
								}}
								activeDot={{
									r: 6,
								}}
							/>
						</LineChart>
					</ChartContainer>
					<div className="mt-4 leading-none text-muted-foreground flex items-center gap-2 text-sm">
						Showing total income for the year
						<TrendingUp className="h-4 w-4" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default AdminDashboard;
