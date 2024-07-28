"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Booking = {
	id: string;
	name: string;
	vehicleRegistrationNumber: string;
	date: string;
	time: string;
	amount: string;
};

export const columns: ColumnDef<Booking>[] = [
	// {
	// 	accessorKey: "id",
	// 	header: "Id",
	// },
	{
		accessorKey: "email",
		header: "Email",
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
	},
];
