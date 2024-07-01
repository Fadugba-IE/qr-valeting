import Image from "next/image";
import { AboutIcon, WhiteDotGrid } from "@/assets/icons";

export default function AboutUs() {
	return (
		<div className="bg-customGreen h-auto w-full px-14 py-14 text-white relative">
			<div className="">
				<Image src={WhiteDotGrid} alt="white-dot-grid" />
				<h1 className="text-[50px] absolute top-[75px] left-[80px]">
					About Us
				</h1>
			</div>
			<div className="flex flex-col md:flex-row md:items-center justify-around gap-5 md:gap-8 mt-10 md:mt-20 md:px-10">
				<Image src={AboutIcon} alt="about-icon" />
				<div className="h-[2px] w-[200px] md:h-40 bg-[#453636] md:w-[2px]"></div>
				<p>
					At ZenCarWash, we're passionate about making your car shine
					inside and out. We don't just wash cars, we bring them back
					to life. Our team of experts uses top-of-the-line equipment
					and eco-friendly products to deliver a fast, efficient, and
					sparkling clean every time.
				</p>
			</div>
		</div>
	);
}
