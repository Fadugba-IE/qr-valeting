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
	const [isLoading, setIsLoading] = useState(true);

	const [bookingData, setBookingData] = useState<BookingInfo | null>(null);
	const [qrCode, setQrCode] = useState<SuccessPaymentType>({
		status: "",
		data: {
			email: "",
			reference: "",
			userReference: "",
			phoneNumber: "",
			paymentDate: "",
			amount: "",
			qrCodeUrl: "",
			validated: false,
			paymentReference: "",
			additionalInfo: "",
			vehicleRegistrationNumber: "",
			serviceType: "",
			carType: "",
			date: "",
			time: "",
		},
		message: "",
	});

	useEffect(() => {
		const bookingInfo = localStorage.getItem("bookingInfo");
		if (bookingInfo) {
			setBookingData(JSON.parse(bookingInfo));
		}
	}, []);

	const generateQRCode = async (data: BookingInfo) => {
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

			const responseData: SuccessPaymentType = await response.json();
			console.log(responseData);
			setQrCode(responseData);
		} catch (error: any) {
			console.error("Error:", error);
		}
		setIsLoading(false);
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = qrCode.data.qrCodeUrl;
		link.download = "qr-code.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
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
						<h1 className="text-2xl ml-[30px]">
							PAYMENT SUCCESSFUL
						</h1>
						{isLoading ? (
							<div className="flex items-center gap-3 mt-5">
								<h1>Generating QR Code</h1> <Spinner />
							</div>
						) : (
							<div className="">
								<p className="text-customGreen text-[50px] ml-[30px]">
									QR Code
								</p>
								<Image
									src={qrCode.data.qrCodeUrl}
									alt="qr-code"
									width={300}
									height={200}
								/>
							</div>
						)}
						<Button
							btnContent="Download"
							btnStyles="bg-customGreen ml-[30px] hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px] mt-5"
							btnType="button"
							handleSubmit={handleDownload}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
