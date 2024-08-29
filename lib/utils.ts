import { type ClassValue, clsx } from "clsx";
import { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const signInSchema = () =>
	z.object({
		// sign up
		email: z.string().email(),
		password: z.string().min(8),
	});

const commonSchema = {
	email: z.string().email(),
	ibPromoCode: z.string().optional(),
	password: z.string().min(8, "Password must be at least 8 characters"),
	repeatPassword: z
		.string()
		.min(8, "Repeat password must be at least 8 characters"),
};

const individuSchema = z
	.object({
		title: z.enum(["Mr", "Mrs"]),
		fullName: z.string().min(1, "Full name is required"),
		birthday: z.string().optional(),
		country: z.string().optional(),
		address: z.string().optional(),
		zipCode: z.string().optional(),
		phoneNumber: z.string().optional(),
		...commonSchema,
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Passwords don't match",
		path: ["repeatPassword"],
	});

const corporateSchema = z
	.object({
		companyName: z.string().min(1, "Company name is required"),
		registrationNumber: z.string().min(1),
		country: z.string().optional(),
		address: z.string().optional(),
		zipCode: z.string().optional(),
		phoneNumber: z.string().optional(),
		...commonSchema,
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Passwords don't match",
		path: ["repeatPassword"],
	});

export const signUpSchema = (type: string) => {
	return type === "individu" ? individuSchema : corporateSchema;
};

export function formatAmount(amount: number): string {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	return formatter.format(amount);
}

export const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const generateRandomDataCommission = (range: DateRange | undefined) => {
	if (!range?.from || !range?.to) return [];

	const startDate = range.from;
	const endDate = range.to;
	const data = [];
	let currentDate = startDate;

	while (currentDate <= endDate) {
		data.push({
			date: format(currentDate, "d MMM"),
			commission: Math.floor(Math.random() * 100) + 1,
		});
		currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
	}

	return data;
};
export const generateRandomDataLots = (range: DateRange | undefined) => {
	if (!range?.from || !range?.to) return [];

	const startDate = range.from;
	const endDate = range.to;
	const data = [];
	let currentDate = startDate;

	while (currentDate <= endDate) {
		data.push({
			date: format(currentDate, "d MMM"),
			lots: Math.floor(Math.random() * 100) + 2,
		});
		currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
	}

	return data;
};

export const generateRandomClientData = (range: DateRange | undefined) => {
	if (!range?.from || !range?.to) return [];

	const startDate = range.from;
	const endDate = range.to;
	const data = [];
	let currentDate = startDate;

	while (currentDate <= endDate) {
		data.push({
			date: format(currentDate, "d MMM"),
			clients: Math.floor(Math.random() * 100) + 2,
		});
		currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
	}

	return data;
};

export const generateRandomValue = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
