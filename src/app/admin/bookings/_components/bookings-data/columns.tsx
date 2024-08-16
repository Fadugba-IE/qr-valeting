"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export type Booking = {
	id: string;
	firstName: string;
	lastName: string;
	vehicleRegistrationNumber: string;
	date: string;
	time: string;
	amount: string;
	email: string;
	carType: string;
	serviceType: string;
	additionalInfo: string;
};

export const columns: ColumnDef<Booking>[] = [
	// {
	// 	accessorKey: "id",
	// 	header: "Id",
	// },
	{
		accessorKey: "id",
		header: "Name",
		cell: ({ row }) => {
			const { firstName, lastName } = row.original;

			const fullName = `${firstName} ${lastName}`;
			return <div className="">{fullName}</div>;
		},
	},
	{
		accessorKey: "vehicleRegistrationNumber",
		header: "Vehicle Registration No",
	},
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		accessorKey: "time",
		header: "Time",
	},
	{
		accessorKey: "amount",
		header: "Amount",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));

			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className="text-customGreen px-1 text-center py-1 rounded-md bg-green-100 hover:bg-green-200">
					{formatted}
				</div>
			);
		},
	},
	{
		accessorKey: "id",
		header: "",
		cell: ({ row }) => {
			const {
				email,
				carType,
				vehicleRegistrationNumber,
				serviceType,
				date,
				time,
				additionalInfo,
				amount,
				firstName,
				lastName,
			} = row.original;

			const fullName = `${firstName} ${lastName}`;

			const formattedAmount = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(parseFloat(amount));

			return (
				<Dialog>
					<DialogTrigger asChild>
						<div className="text-blue-400 text-center px-1 py-1 rounded-md cursor-pointer bg-blue-100 hover:bg-blue-200">
							View
						</div>
					</DialogTrigger>
					<DialogContent className="">
						<DialogHeader>
							<DialogTitle className="font-semibold text-left text-[30px] text-customGreen">
								Booking Summary
							</DialogTitle>
						</DialogHeader>
						<div className="flex flex-col gap-3">
							<p className="text-customGreen">
								<span className="text-black">Name - {""}</span>
								{fullName}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Email address - {""}
								</span>
								{email}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Vehicle type - {""}
								</span>
								{carType}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Vehicle registration number - {""}
								</span>
								{vehicleRegistrationNumber}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Service - {""}
								</span>
								{serviceType}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Date & Time - {""}
								</span>
								{`${date} - ${time}`}
							</p>
							<p className="text-customGreen">
								<span className="text-black">
									Description - {""}
								</span>
								{additionalInfo}
							</p>
							<p className="text-customGreen">
								<span className="text-black">Price - {""}</span>
								{formattedAmount}
							</p>
						</div>
					</DialogContent>
				</Dialog>
			);
		},
	},
];
