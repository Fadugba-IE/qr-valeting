"use client";
import Image from "next/image";
import Button from "./Button";
import { CarOne, CarThree, CarTwo } from "@/assets/images";
import { useRouter } from "next/navigation";
import { DotIcon } from "@/assets/icons";

export default function HeroSection() {
	const router = useRouter();

	return (
		<div
			id="home"
			className=" w-full pt-[150px] md:pt-[180px] md:pb-[100px] px-10 md:px-14 flex flex-col md:flex-row items-center justify-between md:gap-6 gap-10"
		>
			<div className="w-full md:w-[60%] h-auto">
				<div className="text-[50px] md:text-[80px] text-customGreen leading-[55px] md:leading-none">
					Washing your car has never{" "}
					<span className="text-customBlack">been</span> easier.
				</div>
				<p className="text-[30px] md:text-[40px] md:leading-none mt-10 md:w-[550px]">
					We providing high-quality car wash services.
				</p>
				<div className="flex items-center gap-5 mt-10">
					<Button
						btnContent="Book service"
						btnStyles="bg-customOrange hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
						btnType="button"
						handleSubmit={() => router.push("/book-service")}
					/>
					<Button
						btnContent="Login"
						btnStyles="border border-customOrange hover:bg-gray-300 text-customOrange rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
						btnType="button"
						handleSubmit={() => router.push("/login")}
					/>
				</div>
			</div>
			<div className="w-full md:w-[40%] h-auto flex items-center justify-center gap-5 mb-[50px] md:mb-[20px]">
				<Image src={CarOne} alt="car1" width={150} height={150} />
				<div className="flex flex-col gap-5">
					<Image src={CarTwo} alt="car2" width={150} height={150} />
					<Image src={CarThree} alt="car3" width={180} height={150} />
				</div>
			</div>
		</div>
	);
}
