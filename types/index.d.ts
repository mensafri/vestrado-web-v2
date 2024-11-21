declare type Trade = {
	id: number;
	pair: string;
	flags: string[];
	dateCreated: string;
	closeTime: string;
};

declare type TransactionHistory = {
	id: number;
	type: "deposit" | "withdraw" | "transfer";
	dateCreated: Date; // This field needs to be of type Date
	paymentSystem: "Online Banking" | "Instant EFT" | "Credit Card";
	amount: number;
	currency: string;
	status: "Pending" | "Approved" | "Declined" | "Completed";
	account: string;
};

declare type Promotion = {
	id: number;
	imageSrc: string;
	title: string;
	label: string;
};

declare type Referral = {
	name: string;
	balance: number;
	commission: number;
	country: string;
	date: Date;
};

declare type AccountData = {
	account: string;
	accountType: number;
	country: string;
	registrationDate: string;
	isIb: boolean;
	level: string;
	commissionLots: number;
	commissionReceived: number;
};

declare type ClientData = {
	referrals: string;
	country: string;
	registrationDate: string;
	isIb: boolean;
	level: string;
	commissionLots: number;
	commissionReceived: number;
};

declare type NotificationData = {
	id: number;
	title: string;
	content: string;
	date: Date;
	iconUrl: string;
};

declare type Merchandise = {
	id: number;
	sku: string;
	name: string;
	image: string;
	rating: number;
	price: number;
	points: number;
};
