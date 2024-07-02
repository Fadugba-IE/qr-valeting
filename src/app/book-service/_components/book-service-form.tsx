"use client";
import Button from "@/components/landing-page/Button";
import { useRouter } from "next/navigation";

export default function BookServiceForm() {
	const router = useRouter();
	return (
		<div className="h-auto w-full pt-52 md:pt-40 px-14 pb-20 flex flex-col justify-around md:flex-row items-center">
			<div className="">
				<div className="text-center flex flex-col gap-2">
					<h1 className="text-3xl font-bold">Book a Wash</h1>
					<p>
						Please fill the form below to book a wash for your car
					</p>
				</div>
				<form className="h-auto w-[600px] bg-[#F9F9F9] rounded-3xl px-14 py-14 mt-5">
					<div className="flex items-center gap-4">
						<div className="bg-[#EFF0F6] rounded-[50%] px-[20px] py-[10px]">
							1
						</div>
						<div className="h-1 w-[70px] bg-[#EFF0F6]"></div>
						<div className="bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]">
							2
						</div>
						<div className="h-1 w-[70px] bg-[#EFF0F6]"></div>
						<div className="bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]">
							3
						</div>
						<div className="h-1 w-[70px] bg-[#EFF0F6]"></div>
						<div className="bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]">
							4
						</div>
					</div>
					<div className="w-full h-[1px] bg-[#EFF0F6] mt-10"></div>
					<div className="flex flex-col gap-3 mt-10">
						<h1 className="text-xl font-bold">Contact details</h1>
						<p className="text-[#6F6C90]">
							Please fill out your contact details here
						</p>
					</div>
					<div className="w-full flex flex-row gap-4 mt-10">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="text"
								className="text-customGreen font-medium"
							>
								Name
							</label>
							<input
								type="text"
								placeholder="John Doe"
								className="rounded-3xl h-[40px] border border-customGreen px-5"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="email"
								className="text-customGreen font-medium"
							>
								Email
							</label>
							<input
								type="text"
								placeholder="johndoe@gmail.com"
								className="rounded-3xl h-[40px] border border-customGreen px-5"
							/>
						</div>
					</div>
					<div className="w-full flex flex-row gap-4 mt-10">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="text"
								className="text-customGreen font-medium"
							>
								Phone Number
							</label>
							<input
								type="text"
								placeholder="(123)456 - 7890"
								className="rounded-3xl h-[40px] border border-customGreen px-5"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="text"
								className="text-customGreen font-medium"
							>
								Description
							</label>
							<input
								type="text"
								placeholder="please make the car clean"
								className="rounded-3xl h-[40px] border border-customGreen px-5"
							/>
						</div>
					</div>
				</form>

				{/* <div className="flex items-center gap-5 mt-10">
					<Button
						btnContent="Book service"
						btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
						btnType="button"
						handleSubmit={() => router.push("/book-service")}
					/>
					<Button
						btnContent="Login"
						btnStyles="border border-customGreen hover:bg-gray-300 text-customGreen rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
						btnType="button"
						handleSubmit={() => router.push("/login")}
					/>
				</div> */}
				<div className="flex items-center justify-end mt-5">
					<Button
						btnContent="Next Step"
						btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
						btnType="button"
						handleSubmit={() => router.push("/book-service")}
					/>
				</div>
			</div>
		</div>
	);
}
