"use client";
import { Payment, QR } from "@/assets/images";
import Button from "@/components/landing-page/Button";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../(auth-pages)/_components/Spinner";

export default function PaymentSuccess() {
	// const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const [bookingData, setBookingData] = useState<BookingInfo | null>(null);

	useEffect(() => {
		const bookingInfo = localStorage.getItem("bookingInfo");
		if (bookingInfo) {
			setBookingData(JSON.parse(bookingInfo));
		}
	}, []);

	const generateQRCode = async (data: BookingInfo) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/guests/book",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to book the guest");
			}

			const responseData = await response.json();
			console.log(responseData);
		} catch (error: any) {
			console.error("Error:", error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (bookingData) {
			generateQRCode(bookingData);
		}
	}, [bookingData]);

	return (
		<main className="min-h-screen w-full">
			<Header />
			<div className="w-full h-auto flex flex-row md:flex-row pt-[90px]">
				<div className="hidden md:flex w-1/2">
					<Image src={Payment} alt="payment-pic" priority />
				</div>
				<div className="w-full md:w-1/2 px-10 md:px-20 py-10 mt-5">
					<div className="">
						<h1 className="text-2xl">PAYMENT SUCCESSFUL</h1>
						{isLoading ? (
							<div className="flex items-center gap-3 mt-5">
								<h1>Generating QR Code</h1> <Spinner />
							</div>
						) : (
							<div className="">
								<p className="text-customGreen text-[50px]">
									QR Code
								</p>
								<Image src={QR} alt="qr-code" />
							</div>
						)}
						<Button
							btnContent="Download"
							btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px] mt-5"
							btnType="button"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
