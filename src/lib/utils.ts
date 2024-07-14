import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function selectPrice(serviceType: string) {
	if (serviceType?.toLowerCase() === "handwash") {
		return 100;
	} else if (serviceType?.toLowerCase() === "minivalet") {
		return 200;
	} else if (serviceType?.toLowerCase() === "fullvalet") {
		return 200;
	} else if (serviceType?.toLowerCase() === "other") {
		return 200;
	} else {
		return null;
	}
}

export function convertToSubcurrency(amount: number | null, factor = 100) {
	if (amount !== null) {
		return Math.round(amount * factor);
	}
}
