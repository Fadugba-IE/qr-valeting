type ServiceCard = {
	id: number;
	image: any;
	title: string;
	price: number;
	description: string;
};

type SuccessPaymentType = {
	status: "SUCCESS" | "FAILURE";
	data: {
		email: string;
		reference: string;
		userReference: string | null;
		phoneNumber: string | null;
		paymentDate: string | null;
		amount: string;
		qrCodeUrl: string;
		validated: boolean;
		paymentReference: string | null;
		additionalInfo: string;
		vehicleRegistrationNumber: string;
		serviceType: string;
		carType: string;
		date: string;
		time: string;
	};
	message: string;
};

type BookingInfo = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	amount: number | null;
	additionalInfo: string;
	vehicleRegistrationNumber: string;
	serviceType: string;
	carType: string;
	date: string;
	time: string | string[];
};
