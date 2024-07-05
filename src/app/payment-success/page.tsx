import { Payment, QR } from "@/assets/images";
import Button from "@/components/landing-page/Button";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Image from "next/image";

export default function PaymentSuccess() {
	return (
		<main className="min-h-screen w-full">
			<Header />
			<div className="w-full h-auto flex flex-row md:flex-row pt-[90px]">
				<div className="hidden md:flex w-1/2">
					<Image src={Payment} alt="payment-pic" />
				</div>
				<div className="w-full md:w-1/2 px-20 py-10 mt-5">
					<div className="">
						<h1 className="text-2xl">PAYMENT SUCCESSFUL</h1>
						<div className="">
							<p className="text-customGreen text-[50px]">
								QR Code
							</p>
							<Image src={QR} alt="qr-code" />
						</div>
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
