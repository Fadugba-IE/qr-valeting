"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/landing-page/Button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dollar, Success } from "@/assets/icons";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button as ShadBtn } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import type { TimePickerProps } from "antd";
import { Space, TimePicker } from "antd";

const onChange: TimePickerProps["onChange"] = (time, timeString) => {
	console.log(time, timeString);
};

export default function BookServiceForm() {
	const router = useRouter();

	const [date, setDate] = useState<Date>();
	const [step, setStep] = useState(1);
	const [value, setValue] = useState<string | null>("10:00");

	return (
		<div className="h-auto w-full pt-52 md:pt-40 px-14 pb-20 flex flex-col justify-around md:flex-row items-center">
			<div className="">
				<div className="text-center flex flex-col gap-2">
					<h1 className="text-3xl font-bold">Book a Wash</h1>
					<p>
						Please fill the form below to book a wash for your car
					</p>
				</div>
				<form className="h-auto flex md:flex-col w-[400px] md:w-[600px] gap-10 md:gap-0 bg-[#F9F9F9] rounded-3xl px-8 py-10 md:px-14 md:py-14 mt-5">
					<div className="flex flex-col md:flex-row items-center gap-4">
						<div
							className={cn(
								"bg-[#EFF0F6] rounded-[50%] px-[20px] py-[10px]",
								{
									"bg-customGreen text-white": [
										1, 2, 3, 4,
									].includes(step),
								}
							)}
						>
							1
						</div>
						<div
							className={cn(
								"h-[50px] w-1 md:h-1 md:w-[70px] bg-[#EFF0F6]",
								{
									"bg-customGreen": [2, 3, 4].includes(step),
								}
							)}
						></div>
						<div
							className={cn(
								"bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]",
								{
									"bg-customGreen text-white": [
										2, 3, 4,
									].includes(step),
								}
							)}
						>
							2
						</div>
						<div
							className={cn(
								"h-[50px] w-1 md:h-1 md:w-[70px] bg-[#EFF0F6]",
								{
									"bg-customGreen text-white": [
										3, 4,
									].includes(step),
								}
							)}
						></div>
						<div
							className={cn(
								"bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]",
								{
									"bg-customGreen text-white": [
										3, 4,
									].includes(step),
								}
							)}
						>
							3
						</div>
						<div
							className={cn(
								"h-[50px] w-1 md:h-1 md:w-[70px] bg-[#EFF0F6]",
								{
									"bg-customGreen": [4].includes(step),
								}
							)}
						></div>
						<div
							className={cn(
								"bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]",
								{
									"bg-customGreen text-white": [4].includes(
										step
									),
								}
							)}
						>
							4
						</div>
					</div>
					<div className="hidden md:flex md:w-full md:h-[1px] bg-[#EFF0F6] mt-10"></div>
					{step === 1 && (
						<div>
							<div className="flex flex-col md:gap-3 md:mt-10">
								<h1 className="text-xl font-bold">
									Contact details
								</h1>
								<p className="text-[#6F6C90]">
									Please fill out your contact details here
								</p>
							</div>
							<div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-2 md:mt-10">
								<div className="flex flex-col gap-2 w-full md:w-[45%]">
									<label
										htmlFor="text"
										className="text-customGreen font-medium"
									>
										Name
									</label>
									<input
										type="text"
										placeholder="John Doe"
										className="rounded-3xl h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
									/>
								</div>
								<div className="flex flex-col gap-2 w-full md:w-[45%]">
									<label
										htmlFor="email"
										className="text-customGreen font-medium"
									>
										Email
									</label>
									<input
										type="text"
										placeholder="johndoe@gmail.com"
										className="rounded-3xl h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
									/>
								</div>
							</div>
							<div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-4 md:mt-10">
								<div className="flex flex-col gap-2 w-full md:w-[45%]">
									<label
										htmlFor="text"
										className="text-customGreen font-medium"
									>
										Phone Number
									</label>
									<input
										type="text"
										placeholder="(123)456 - 7890"
										className="rounded-3xl h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
									/>
								</div>
								<div className="flex flex-col gap-2 w-full md:w-[45%]">
									<label
										htmlFor="text"
										className="text-customGreen font-medium"
									>
										Description
									</label>
									<input
										type="text"
										placeholder="please make the car clean"
										className="rounded-3xl h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
									/>
								</div>
							</div>
						</div>
					)}
					{step === 2 && (
						<div className="md:mt-10">
							<div className="flex flex-col md:gap-3">
								<h1 className="text-xl font-bold">
									Our Services
								</h1>
								<p className="text-[#6F6C90]">
									Please select which service you are
									interested in.
								</p>
							</div>
							<div className="flex flex-wrap justify-between gap-5 mt-6">
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Handwash
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Mini valet
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Full valet
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Other
								</button>
							</div>
						</div>
					)}
					{step === 3 && (
						<div className="md:mt-10">
							<div className="flex flex-col gap-3">
								<h1 className="text-lg md:text-xl font-bold">
									Select your vehicle type and date/time
								</h1>
								<p className="text-[#6F6C90]">
									Please select your vehicle type and
									date/time
								</p>
							</div>
							<div className="flex flex-wrap justify-between gap-5 mt-6">
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Car
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									SUV
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Van/Pickup
								</button>
								<button className="bg-white w-[200px] md:w-[230px] h-[100px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md">
									Caravan
								</button>
							</div>
							<div className="flex items-center md:justify-center gap-2 mt-8">
								<Popover>
									<PopoverTrigger asChild>
										<ShadBtn
											variant={"outline"}
											className={cn(
												"justify-start text-left font-normal",
												!date && "text-muted-foreground"
											)}
										>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{date ? (
												format(date, "PPP")
											) : (
												<span className="text-sm">
													Pick a date
												</span>
											)}
										</ShadBtn>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar
											mode="single"
											selected={date}
											onSelect={setDate}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<div>
									<TimePicker
										use12Hours
										placeholder="Select a time"
										onChange={onChange}
										className="h-[40px] cursor-pointer"
									/>
								</div>
							</div>
						</div>
					)}
					{step === 4 && (
						<div className="mt-10">
							<div className="flex text-center flex-col gap-3">
								<div className="flex justify-around">
									<Image src={Success} alt="success-icon" />
								</div>
								<h1 className="text-xl font-bold">
									Proceed to pay for your booking
								</h1>
							</div>
							<div className="flex justify-between mt-5">
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">
											Service -{" "}
										</h2>
										<p className="text-customGreen">
											Handwash
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">
											Date & time -{" "}
										</h2>
										<p className="text-customGreen">
											12 Jan, 2023 - 12:34 PM
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">
											Description -{" "}
										</h2>
										<p className="text-customGreen">
											Go gentle on the seats
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<Image src={Dollar} alt="dollar" />
										<p className="text-customGreen">
											USD 180
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">Name - </h2>
										<p className="text-customGreen">
											Tolani
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">Email - </h2>
										<p className="text-customGreen">
											tolani@gmail.com
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">
											Vehicle type -{" "}
										</h2>
										<p className="text-customGreen">Car</p>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="font-bold">
											Vehicle registration number -{" "}
										</h2>
										<p className="text-customGreen">
											1849294402
										</p>
									</div>
								</div>
							</div>
							<div className="flex justify-center mt-4">
								<Button
									btnContent="Proceed to pay"
									btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
									btnType="button"
									handleSubmit={() =>
										setStep((prevStep) => prevStep + 1)
									}
								/>
							</div>
						</div>
					)}
				</form>
				{(step === 2 || step === 3) && (
					<div className="flex items-center justify-between mt-10">
						<Button
							btnContent="Previous"
							btnStyles="border border-customGreen hover:bg-gray-300 text-customGreen rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
							btnType="button"
							handleSubmit={() =>
								setStep((prevStep) => prevStep - 1)
							}
						/>
						<Button
							btnContent="Next step"
							btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
							btnType="button"
							handleSubmit={() =>
								setStep((prevStep) => prevStep + 1)
							}
						/>
					</div>
				)}
				{step === 1 && (
					<div className="flex items-center justify-end mt-5">
						<Button
							btnContent="Next Step"
							btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
							btnType="button"
							handleSubmit={() =>
								setStep((prevStep) => prevStep + 1)
							}
						/>
					</div>
				)}
				{step === 4 && (
					<div className="flex items-center justify-start mt-5">
						<Button
							btnContent="Previous"
							btnStyles="border border-customGreen hover:bg-gray-300 text-customGreen rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
							btnType="button"
							handleSubmit={() =>
								setStep((prevStep) => prevStep - 1)
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
