"use client";
import Button from "@/components/landing-page/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { cn, selectPrice, convertToSubcurrency } from "@/lib/utils";
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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import { Payment } from "@/assets/images";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
	throw new Error("NEXT_PUBLIC_STRIPE_KEY is not defined");
}

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function BookServiceForm() {
	// const amount = 49.99;

	const [date, setDate] = useState<Date>();
	const [step, setStep] = useState(1);
	const [time, setTime] = useState<string | string[]>("10:00");

	const onChange: TimePickerProps["onChange"] = (time, timeString) => {
		console.log(time, timeString);
		setTime(timeString);
	};

	const [bookingInfo, setBookingInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		description: "",
		vehicleRegNo: "",
	});

	const [service, setService] = useState("");
	const [vehicleType, setVehicleType] = useState("");

	const formattedDate = date
		? date.toLocaleDateString()
		: "No date available";
	const formattedTime = time ? time : "No time available";

	const handleBookingInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setBookingInfo((prev) => ({ ...prev, [name]: value }));
	};

	const amount = selectPrice(service);

	const handleSubmit = () => {
		const bookingData = {
			firstName: bookingInfo.firstName,
			lastName: bookingInfo.lastName,
			email: bookingInfo.email,
			phoneNumber: bookingInfo.phoneNumber,
			amount: amount,
			additionalInfo: bookingInfo.description,
			vehicleRegistrationNumber: bookingInfo.vehicleRegNo,
			serviceType: service,
			carType: vehicleType,
			date: formattedDate,
			time: formattedTime,
		};
		console.log(bookingData);
	};

	return (
		<>
			{step !== 5 && (
				<div className="h-auto w-full pt-[150px] px-5 md:pt-40 md:px-20 pb-20 flex flex-col justify-around md:flex-row items-center">
					<div className="w-auto">
						<div className="text-center flex flex-col gap-2 px-4">
							<h1 className="text-3xl font-bold">Book a Wash</h1>
							<p className="text-sm md:text-lg">
								Please fill the form below to book a wash for
								your car
							</p>
						</div>
						<form className="h-auto flex md:flex-col w-auto md:w-[600px] gap-8 md:gap-0 bg-[#F9F9F9] rounded-2xl md:rounded-3xl px-5 py-10 md:px-14 md:py-14 mt-5">
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
											"bg-customGreen": [
												2, 3, 4,
											].includes(step),
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
											"bg-customGreen": [4].includes(
												step
											),
										}
									)}
								></div>
								<div
									className={cn(
										"bg-[#EFF0F6] rounded-[50%] px-[18px] py-[10px]",
										{
											"bg-customGreen text-white": [
												4,
											].includes(step),
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
										<p className="text-[#6F6C90] text-sm md:text-lg">
											Please fill out your contact details
											here
										</p>
									</div>
									<div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-2 md:mt-10">
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="text"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												First name
											</label>
											<input
												name="firstName"
												type="text"
												placeholder="Enter your first name"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.firstName}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="text"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												Last name
											</label>
											<input
												name="lastName"
												type="text"
												placeholder="Enter your last name"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.lastName}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
									</div>
									<div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-2 md:mt-10">
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="email"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												Email
											</label>
											<input
												name="email"
												type="text"
												placeholder="Enter a valid email"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.email}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="text"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												Phone Number
											</label>
											<input
												name="phoneNumber"
												type="text"
												placeholder="Enter your phone number"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.phoneNumber}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
									</div>
									<div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-4 md:mt-10">
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="text"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												Description
											</label>
											<input
												name="description"
												type="text"
												placeholder="e.g. wash gently"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.description}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
										<div className="flex flex-col gap-2 w-full md:w-[45%]">
											<label
												htmlFor="text"
												className="text-customGreen font-medium text-sm md:text-lg"
											>
												Vehicle Registration No
											</label>
											<input
												name="vehicleRegNo"
												type="text"
												placeholder="e.g. BD51SMR"
												className="rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 text-[12px] placeholder:text-[12px]"
												value={bookingInfo.vehicleRegNo}
												onChange={
													handleBookingInfoChange
												}
											/>
										</div>
									</div>
								</div>
							)}
							{step === 2 && (
								<div className="md:mt-10">
									<div className="flex flex-col md:gap-3">
										<h1 className="text-lg md:text-xl font-bold">
											Our Services
										</h1>
										<p className="text-[#6F6C90] text-sm md:text-lg">
											Please select which service you are
											interested in.
										</p>
									</div>
									<div className="flex flex-wrap justify-between gap-5 mt-6">
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												service === "Handwash" &&
													"border-2 border-customGreen"
											)}
											value={service}
											onClick={() =>
												setService("Handwash")
											}
											type="button"
										>
											Handwash
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												service === "Mini valet" &&
													"border-2 border-customGreen"
											)}
											value={service}
											onClick={() =>
												setService("Mini valet")
											}
											type="button"
										>
											Mini valet
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												service === "Full valet" &&
													"border-2 border-customGreen"
											)}
											value={service}
											onClick={() =>
												setService("Full valet")
											}
											type="button"
										>
											Full valet
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												service === "Other" &&
													"border-2 border-customGreen"
											)}
											value={service}
											onChange={() => setService("Other")}
											type="button"
										>
											Other
										</button>
									</div>
								</div>
							)}
							{step === 3 && (
								<div className="md:mt-10">
									<div className="flex flex-col gap-3">
										<h1 className="text-lg md:text-xl font-bold">
											Select your vehicle type and
											date/time
										</h1>
										<p className="text-[#6F6C90] text-sm md:text-lg">
											Please select your vehicle type and
											date/time
										</p>
									</div>
									<div className="flex flex-wrap justify-between gap-5 mt-6">
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												vehicleType === "Car" &&
													"border-2 border-customGreen"
											)}
											value={vehicleType}
											onClick={() =>
												setVehicleType("Car")
											}
											type="button"
										>
											Car
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												vehicleType === "SUV" &&
													"border-2 border-customGreen"
											)}
											value={vehicleType}
											onClick={() =>
												setVehicleType("SUV")
											}
											type="button"
										>
											SUV
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												vehicleType === "Van" &&
													"border-2 border-customGreen"
											)}
											value={vehicleType}
											onClick={() =>
												setVehicleType("Van")
											}
											type="button"
										>
											Van/Pickup
										</button>
										<button
											className={cn(
												"bg-white w-[200px] md:w-[230px] h-[70px] md:h-[150px] rounded-[20px] hover:border-2 hover:border-customGreen shadow-md",
												vehicleType === "Caravan" &&
													"border-2 border-customGreen"
											)}
											value={vehicleType}
											onClick={() =>
												setVehicleType("Caravan")
											}
											type="button"
										>
											Caravan
										</button>
									</div>
									<div className="flex flex-col md:flex-row mr-4 items-center md:justify-center gap-2 mt-8">
										<Popover>
											<PopoverTrigger asChild>
												<ShadBtn
													variant={"outline"}
													className={cn(
														"justify-start text-left font-normal",
														!date &&
															"text-muted-foreground"
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
								<div className="md:mt-10">
									<div className="flex text-center flex-col gap-2 md:gap-3">
										<div className="flex justify-around">
											<Image
												src={Success}
												alt="success-icon"
											/>
										</div>
										<h1 className="text-sm md:text-xl font-bold">
											Proceed to pay for your booking
										</h1>
									</div>
									<div className="flex gap-3 flex-col md:flex-row justify-between mt-3 md:mt-5">
										<div className="flex flex-col gap-3">
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Firstname -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{bookingInfo.firstName}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold ">
													Service -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{service}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Date & time -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{formattedDate} -{" "}
													{formattedTime}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Description -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{bookingInfo.description}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<Image
													src={Dollar}
													alt="dollar"
												/>
												<p className="text-customGreen text-sm md:text-lg">
													USD {amount}
												</p>
											</div>
										</div>
										<div className="flex flex-col gap-3">
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Lastname -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{bookingInfo.lastName}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Email -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{bookingInfo.email}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Vehicle type -{" "}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													{vehicleType}
												</p>
											</div>
											<div className="flex flex-col gap-1">
												<h2 className="text-sm md:text-lg font-bold">
													Vehicle registration number
													-{bookingInfo.vehicleRegNo}
												</h2>
												<p className="text-customGreen text-sm md:text-lg">
													1849294402
												</p>
											</div>
										</div>
									</div>
									<div className="flex justify-center mt-4">
										<Button
											btnContent="Proceed to pay"
											btnStyles="text-sm md:text-lg bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] px-12"
											btnType="button"
											handleSubmit={() => {
												handleSubmit();
												setStep(
													(prevStep) => prevStep + 1
												);
											}}
										/>
									</div>
								</div>
							)}
						</form>
						{(step === 2 || step === 3) && (
							<div className="flex items-center justify-between mt-5 md:mt-10">
								<Button
									btnContent="Previous"
									btnStyles="text-sm md:text-lg border border-customGreen hover:bg-gray-300 text-customGreen rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
									btnType="button"
									handleSubmit={() =>
										setStep((prevStep) => prevStep - 1)
									}
								/>
								<Button
									btnContent="Next step"
									btnStyles="text-sm md:text-lg bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px]"
									btnType="button"
									handleSubmit={() =>
										setStep((prevStep) => prevStep + 1)
									}
								/>
							</div>
						)}
						{step === 1 && (
							<div className="flex items-center justify-end mt-3 md:mt-5">
								<Button
									btnContent="Next Step"
									btnStyles="text-sm md:text-lg bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px] mr-3"
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
									btnStyles="text-sm md:text-lg border border-customGreen hover:bg-gray-300 text-customGreen rounded-3xl cursor-pointer h-[50px] w-[150px] border-2"
									btnType="button"
									handleSubmit={() =>
										setStep((prevStep) => prevStep - 1)
									}
								/>
							</div>
						)}
					</div>
				</div>
			)}
			{step === 5 && (
				<div className="w-full h-auto flex flex-row md:flex-row pt-[90px]">
					<div className="hidden md:flex w-1/2">
						<Image src={Payment} alt="payment-pic" />
					</div>
					<div className="w-full md:w-1/2 px-10 py-10 mt-5">
						<Elements
							stripe={stripePromise}
							options={{
								mode: "payment",
								amount: convertToSubcurrency(amount),
								currency: "usd",
							}}
						>
							<CheckoutPage amount={amount ? amount : 0} />
						</Elements>
					</div>
				</div>
			)}
		</>
	);
}
