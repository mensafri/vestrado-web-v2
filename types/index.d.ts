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
