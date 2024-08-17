import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function selectPrice(serviceType: string) {
	if (serviceType?.toLowerCase() === "handwash") {
		return [8, 10, 15, 20];
	} else if (serviceType?.toLowerCase() === "minivalet") {
		return [20, 25, 35, 40];
	} else if (serviceType?.toLowerCase() === "fullvalet") {
		return [55, 65, 70, 75];
	}
	return [0];
}

export function convertToSubcurrency(amount: number | null, factor = 100) {
	if (amount !== null) {
		return Math.round(amount * factor);
	}
}

export const roles = {
	user: "USER",
	admin: "ADMIN",
};
