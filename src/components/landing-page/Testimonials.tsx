import { Avatar, DotIcon, Triangle } from "@/assets/icons";
import Image from "next/image";

export default function Testimonials() {
	return (
		<div
			id="testimonials"
			className="bg-white h-auto w-full px-14 py-14 text-customGreen relative"
		>
			<div className="">
				<Image src={DotIcon} alt="white-dot-grid" />
				<h1 className="text-[40px] md:text-[50px] absolute top-[85px] md:top-[75px] left-[80px]">
					Testimonials
				</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-between mt-20">
				<div className="flex flex-col mb-10 md:mb-0">
					<div className="ml-[45px]">
						<div className="flex items-center gap-3">
							<Image src={Avatar} alt="avatar" />
							<h2 className="text-customGreen">Ben Isaac</h2>
						</div>
						<Image src={Triangle} alt="triangle" />
					</div>
					<div className="bg-customGreen text-white p-8 w-[300px] rounded-[50px]">
						<p>
							“Amazing valeting services, definitely recommending this to my friends“
						</p>
					</div>
				</div>
				<div className="flex flex-col mb-10 md:mb-0">
					<div className="ml-[45px]">
						<div className="flex items-center gap-3">
							<Image src={Avatar} alt="avatar" />
							<h2 className="text-customGreen">Carey Kent</h2>
						</div>
						<Image src={Triangle} alt="triangle" />
					</div>
					<div className="bg-customGreen text-white p-8 w-[300px] rounded-[50px]">
						<p>
							“I cannot praise Mat highly enough for his hard
							work, passion and enthusiasm in the way he dealt
							with my car.“
						</p>
					</div>
				</div>
				<div className="flex flex-col mb-10 md:mb-0">
					<div className="ml-[45px]">
						<div className="flex items-center gap-3">
							<Image src={Avatar} alt="avatar" />
							<h2 className="text-customGreen">Sabah Ahmad</h2>
						</div>
						<Image src={Triangle} alt="triangle" />
					</div>
					<div className="bg-customGreen text-white p-8 w-[300px] rounded-[50px]">
						<p>
							“As a taxi driver, i get my valeting done weekly and the services are amazing“
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
