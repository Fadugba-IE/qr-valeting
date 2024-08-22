"use client";
import Image from "next/image";
import { DotIcon, Good, TickOn } from "@/assets/icons";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { servicesInfo } from "@/data/services";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Services() {
	const router = useRouter();

	return (
		<div
			id="services"
			className="bg-white h-auto w-full px-14 py-14 text-customGreen relative"
		>
			<div>
				<Image src={DotIcon} alt="white-dot-grid" />
				<h1 className="text-[40px] md:text-[50px] absolute top-[85px] md:top-[75px] left-[80px]">
					Our Services
				</h1>
			</div>
			<div className="mt-10 ">
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent>
						{servicesInfo.map((service) => (
							<CarouselItem
								key={service.id}
								className="md:basis-1/2 lg:basis-1/3 rounded-xl p-2"
							>
								<div className="p-2">
									<Card className="bg-[#f1f0f0] rounded-[20px]">
										<CardContent className=" p-6">
											<Image
												src={service.image}
												alt="service-car"
											/>
											<div className="flex justify-between items-center mt-5">
												<h2 className="font-bold">
													{service.title}
												</h2>
												<p>{service.price}</p>
											</div>
											<div className="mt-5 flex flex-col gap-3">
												<div className="flex items-center gap-3">
													<Image
														src={Good}
														alt="good-icon"
													/>
													<p>
														{service.descriptionOne}
													</p>
												</div>
												<div className="flex items-center gap-3">
													<Image
														src={Good}
														alt="good-icon"
													/>
													<p>
														{service.descriptionTwo}
													</p>
												</div>
												<div className="flex items-center gap-3">
													<Image
														src={Good}
														alt="good-icon"
													/>
													<p>
														{
															service.descriptionThree
														}
													</p>
												</div>
												<div className="flex items-center gap-3">
													<Image
														src={Good}
														alt="good-icon"
													/>
													<p>
														Wax & Dry Door Shuts{" "}
														<HoverCard>
															<HoverCardTrigger>
																<span className="text-customGreen cursor-pointer">
																	{
																		service.extras
																	}
																</span>
															</HoverCardTrigger>
															<HoverCardContent>
																{service.extrasContent.map(
																	(extra) => (
																		<span
																			key={
																				extra
																			}
																			className="text-customGreen mb-1 cursor-pointer rounded-sm hover:bg-gray-200 px-4 py-2 block"
																		>
																			{
																				extra
																			}
																		</span>
																	)
																)}
															</HoverCardContent>
														</HoverCard>
													</p>
												</div>
											</div>
											<div className="mt-4 flex flex-col gap-1">
												<p className="text-lightGreen">
													Add-ons
												</p>
												<div className="flex items-center gap-3">
													<button>
														<Image
															src={TickOn}
															alt="tick-on"
														/>
													</button>
													<p className="text-lightGreen">
														Polish
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</div>
			<div className="text-center">
				<Button
					btnContent="Book Service"
					btnStyles="bg-customOrange hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[50px] w-[150px] mt-8"
					btnType="button"
					handleSubmit={() => router.push("/book-service")}
				/>
			</div>
		</div>
	);
}
