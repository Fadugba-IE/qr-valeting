import { Avatar, DotIcon, Triangle } from "@/assets/icons";
import Image from "next/image";

export default function Testimonials() {
	return (
		<div className="bg-white h-auto w-full px-14 py-14 text-customGreen relative">
			<div className="">
				<Image src={DotIcon} alt="white-dot-grid" />
				<h1 className="text-[50px] absolute top-[75px] left-[80px]">
					Testimonials
				</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-between mt-20">
				<div className="flex flex-col mb-10 md:mb-0">
					<div className="ml-[45px]">
						<div className="flex items-center gap-3">
							<Image src={Avatar} alt="avatar" />
							<h2 className="text-customGreen">John Doe</h2>
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
							<h2 className="text-customGreen">John Doe</h2>
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
							<h2 className="text-customGreen">John Doe</h2>
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
			</div>
		</div>
	);
}
