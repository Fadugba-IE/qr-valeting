import { Address, DotIcon, Email, Phone } from "@/assets/icons";
import Image from "next/image";
import Button from "./Button";

export default function Contact() {
	return (
		<div className="bg-white h-auto w-full px-14 py-14 text-customGreen relative">
			<div>
				<Image src={DotIcon} alt="white-dot-grid" />
				<h1 className="text-[50px] absolute top-[75px] left-[80px]">
					Contact Us
				</h1>
			</div>
			<div className="w-full flex flex-col-reverse md:flex-row gap-2">
				<div className="w-full md:w-1/2">
					<form className="h-auto bg-white rounded-xl md:px-14 py-10">
						<div className="mt-3">
							<input
								type="text"
								placeholder="Full name"
								className="rounded-3xl w-full h-[40px] border border-customGreen px-5 bg-[#F9F9F9]"
							/>
						</div>
						<div className="mt-8">
							<input
								type="text"
								placeholder="Email address"
								className="rounded-3xl w-full h-[40px] border border-customGreen px-5 bg-[#F9F9F9]"
							/>
						</div>
						<div className="mt-8">
							<input
								type="text"
								placeholder="Subject"
								className="rounded-3xl w-full h-[40px] border border-customGreen px-5 bg-[#F9F9F9]"
							/>
						</div>
						<div className="mt-8">
							<textarea
								name="message"
								id="message"
								placeholder="Write a brief description of your request"
								className="rounded-3xl w-full h-[240px] border border-customGreen px-5 py-3 bg-[#F9F9F9] resize-none"
							></textarea>
						</div>
						<Button
							btnContent="Send"
							btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px] mt-8"
							btnType="button"
						/>
					</form>
				</div>
				<div className="w-full md:w-1/2 flex md:justify-around mt-10 md:mt-28">
					<div className="flex flex-col gap-5">
						<div className="flex items-center gap-3">
							<Image src={Email} alt="email-icon" />
							<p>valetingservice@gmail.com</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={Phone} alt="phone-icon" />
							<p>09028272009</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={Address} alt="address-icon" />
							<p>Birmingham, United Kingdom</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
