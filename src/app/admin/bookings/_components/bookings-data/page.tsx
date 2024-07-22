import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "101",
			name: "Omotola Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "102",
			name: "James Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "103",
			name: "Amanda Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "104",
			name: "Kalu Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "105",
			name: "Kate Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "106",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "107",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "108",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "109",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "110",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
		{
			id: "111",
			name: "Oke Jinadu",
			vehicleRegNo: "186792736",
			date: "07 Jul 2023",
			time: "12:30 pm",
			amount: "$45",
		},
	];
}

export default async function BookingsTable() {
	const data = await getData();

	return (
		<div className="mt-4 bg-white">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
