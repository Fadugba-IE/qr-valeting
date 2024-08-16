import { ServiceCar } from "@/assets/images";

export const servicesInfo: ServiceCard[] = [
	{
		id: 1,
		image: ServiceCar,
		title: "Hand Wash",
		price: 13,
		descriptionOne: "Exterior Handwash",
		descriptionTwo: "Wheel Cleaning",
		descriptionThree: "Windows & Mirrors",
		extras: "+ 1 more",
		extrasContent: ["Drying & Waxing"],
	},
	{
		id: 2,
		image: ServiceCar,
		title: "Mini Valet",
		price: 23,
		descriptionOne: "Exterior Handwash",
		descriptionTwo: "Interior Vacuum",
		descriptionThree: "Dashboard & Console Cleaning",
		extras: "+ 3 more",
		extrasContent: [
			"Window & Mirror Cleaning",
			"Wheels & Tire Shine",
			"Basic Wax Application",
		],
	},

	{
		id: 3,
		image: ServiceCar,
		title: "Full valet",
		price: 39,
		descriptionOne: "Exterior Handwash",
		descriptionTwo: "Full Interior Vacuum",
		descriptionThree: "Interior Shampoo",
		extras: "+ 7 more",
		extrasContent: [
			"Dashboard & Console Detailing",
			"Leather Treatment",
			"Window & Mirror Cleaning",
			"Wheels & Tire Detailing",
			"Clay Bar Treatment",
			"High-Gloss Wax or Sealant Application",
			"Engine Bay Cleaning",
		],
	},
];
