type ServiceCard = {
	id: number;
	image: any;
	title: string;
	price: number;
	descriptionOne: string;
	descriptionTwo: string;
	descriptionThree: string;
	extras: string;
	extrasContent: string[];
};

type SuccessPaymentType = {
	status: string;
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

type UserRole =
	| "READ_PRIVILEGE"
	| "WRITE_PRIVILEGE"
	| "DELETE_PRIVILEGE"
	| "UPDATE_PRIVILEGE"
	| "ROLE_ADMIN";

interface UserInfo {
	id: string;
	email: string;
	roles: UserRole[];
	first_name: string;
	role_name: string;
	access_token: string;
	refresh_token: string;
	token_type: string;
}

interface AuthInfo {
	status: string | number;
	data: UserInfo;
	message: string;
}
