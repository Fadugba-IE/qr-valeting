"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	name: string;
	vehicleRegNo: string;
	date: string;
	time: string;
	amount: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "id",
		header: "Id",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "vehicleRegNo",
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
