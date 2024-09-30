"use client";
import { useContext, useEffect, useState } from "react";
import { Booking, columns } from "./columns";
import { DataTable } from "./data-table";
import { AuthContext } from "@/context/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

export default function BookingsTable() {
	const {
		userData,
		setUserData,
		isLoading,
		setIsLoading,
		searchBookingsText,
	} = useContext(AuthContext);
	const [bookings, setBookings] = useState<Booking[]>([]);
	const [pageNo, setPageNo] = useState(0);
	const [totalBookings, setTotalBookings] = useState(0);
	const pageSize = 10;

	const router = useRouter();

	const data = [
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

	const fetchData = async (page: number) => {
		if (!userData || !userData.access_token) {
			console.log("Access token is not available.");
			return;
		}
		setIsLoading(true);

		try {
			const response = await fetch(
				`https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/admin/view-bookings?q=firstName~${searchBookingsText}&page=${page}&size=${pageSize}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${userData.access_token}`,
					},
				}
			);
			const result = await response.json();
			const { data, totalItems } = result.data.pageDto;
			console.log(data);

			setBookings(data);
			setTotalBookings(totalItems);
		} catch (error) {
			console.error("Failed to fetch bookings:", error);
			setIsLoading(false);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUserData(JSON.parse(storedUser));
		} else {
			router.push("/login"); // Redirect to login if no user data
		}
	}, [router, setUserData]);

	useEffect(() => {
		if (userData && userData.access_token) {
			fetchData(pageNo);
		} else {
			console.log("User data or access token not available yet.");
		}
	}, [userData, pageNo, searchBookingsText]);

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-around mt-20">
					<TailSpin color="#007148" height="70px" width="70px" />
				</div>
			) : (
				<div className="mt-4 bg-white">
					<DataTable
						columns={columns}
						data={bookings}
						pageNo={pageNo}
						pageSize={pageSize}
						totalBookings={totalBookings}
						setPageNo={setPageNo}
					/>
				</div>
			)}
		</>
	);
}
