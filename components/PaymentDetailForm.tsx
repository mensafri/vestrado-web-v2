"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectContent,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

// Define Zod schema for validation
const paymentDetailsSchema = z.object({
	uploadType: z.string().min(1, "Select the type of payment details."),
	bankName: z.string().min(2, "Bank name must be selected."),
	bankHolderName: z
		.string()
		.min(2, "Bank holder name must be at least 2 characters long."),
	bankAccountNumber: z
		.string()
		.min(10, "Bank account number must be at least 10 digits."),
	idCardNumber: z
		.string()
		.min(5, "ID card number must be at least 5 characters."),
});

// Define types from schema
type PaymentDetailsFormData = z.infer<typeof paymentDetailsSchema>;

type Step = "form" | "confirm" | "success";

export default function PaymentDetailForm() {
	const [step, setStep] = useState<Step>("form");

	// React Hook Form setup with Zod schema validation
	const form = useForm<PaymentDetailsFormData>({
		resolver: zodResolver(paymentDetailsSchema),
	});

	// Function to move to the next step
	const handleNextStep = () => {
		setStep("confirm");
	};

	// Function to go back to the form step
	const handleBackToForm = () => {
		setStep("form");
	};

	// Function to handle form submission
	const onSubmit = (data: PaymentDetailsFormData) => {
		handleNextStep();
	};

	// Handle success after confirmation
	const handleConfirm = () => {
		setStep("success");
	};

	// Success screen
	if (step === "success") {
		return (
			<Card className="w-full mx-auto p-6 border-none">
				<CardHeader className="text-center">
					<CheckCircle
						className="mx-auto mb-4 text-green-500"
						size={120}
					/>
					<CardTitle>New payment detail uploaded!</CardTitle>
				</CardHeader>
				<CardContent className="text-center items-center flex flex-col justify-center">
					<p className="text-gray-500 mb-6 w-96">
						Your new Bank Account payment detail has been successfully added. We
						will notify you once the payment detail has been approved.
					</p>
					<Button
						size="lg"
						asChild>
						<Link href="/client-panel/accounts">Back to Account</Link>
					</Button>
				</CardContent>
			</Card>
		);
	}

	// Confirmation screen
	if (step === "confirm") {
		const formData = form.getValues();

		return (
			<Card className="w-full mx-auto p-6 border-none">
				<CardHeader className="text-center">
					<CardTitle>Details Confirmation</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex justify-between">
						<span>Upload Type</span>
						<span>{formData.uploadType}</span>
					</div>
					<div className="flex justify-between">
						<span>Bank Name</span>
						<span>{formData.bankName}</span>
					</div>
					<div className="flex justify-between">
						<span>Bank Holder Name</span>
						<span>{formData.bankHolderName}</span>
					</div>
					<div className="flex justify-between">
						<span>Bank Account Number</span>
						<span>{formData.bankAccountNumber}</span>
					</div>
					<div className="flex justify-between">
						<span>Identity Card Number</span>
						<span>{formData.idCardNumber}</span>
					</div>
					<div className="flex w-full gap-4 mt-6">
						<Button
							className="w-full"
							size="lg"
							variant="outline"
							onClick={handleBackToForm}>
							Cancel
						</Button>
						<Button
							className="w-full"
							size="lg"
							onClick={handleConfirm}>
							Confirm
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	// Form input screen
	return (
		<Card className="w-full mx-auto p-6 border-none">
			<CardHeader className="text-center">
				<CardTitle>Upload Payment Details</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4">
						<FormField
							control={form.control}
							name="uploadType"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>I want to upload my</FormLabel> */}
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue placeholder="I want to upload my" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Bank Account">
													Bank Account
												</SelectItem>
												<SelectItem value="Credit Card">Credit Card</SelectItem>
												<SelectItem value="PayPal">PayPal</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bankName"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Bank Name</FormLabel> */}
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue placeholder="Bank Name" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Hong Leong Bank Berhad">
													Hong Leong Bank Berhad
												</SelectItem>
												<SelectItem value="Maybank">Maybank</SelectItem>
												<SelectItem value="CIMB Bank">CIMB Bank</SelectItem>
												<SelectItem value="RHB Bank">RHB Bank</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bankHolderName"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Bank Holder Name</FormLabel> */}
									<FormControl>
										<Input
											placeholder="Bank Holder Name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="bankAccountNumber"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Bank Account Number</FormLabel> */}
									<FormControl>
										<Input
											placeholder="Bank Account Number"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="idCardNumber"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>National Identity Card Number</FormLabel> */}
									<FormControl>
										<Input
											placeholder="National Identity Card Number"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex gap-4 mt-6 w-full">
							<Button
								size="lg"
								className="w-full"
								variant="outline"
								type="button"
								onClick={() => form.reset()}>
								Reset
							</Button>
							<Button
								size="lg"
								className="w-full"
								type="submit">
								Submit
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
