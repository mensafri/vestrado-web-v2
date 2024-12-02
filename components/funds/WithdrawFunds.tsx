"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import BankingDetailsCard from "./BankingDetailsCard";

// Step 1 schema
const step1Schema = z.object({
	account: z.string().min(1, "Please select an account"),
	method: z.string().min(1, "Please select a method"),
});

// Step 2 schema
const step2Schema = z.object({
	withdrawAmount: z.string().min(1, "Enter withdrawal amount"),
	creditedAmount: z.string().min(1, "Enter credited amount"),
});

// Types for form data
type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;

export default function WithdrawFunds({ type }: { type: "ib" | "client" }) {
	const [step, setStep] = useState(1);

	// Form handlers for step 1 and step 2
	const formStep1 = useForm<Step1FormData>({
		resolver: zodResolver(step1Schema),
		defaultValues: {
			account: "",
			method: "",
		},
	});

	const formStep2 = useForm<Step2FormData>({
		resolver: zodResolver(step2Schema),
		defaultValues: {
			withdrawAmount: "",
		},
	});

	// Mock data for accounts and methods
	const accounts = [
		{ id: 1, label: "Frux Account (ECN) 3421140 (2882.00 USD)" },
		{ id: 2, label: "Frux Account (STP) 8734120 (1200.00 USD)" },
	];

	const methods = [
		{ id: 1, label: "Online Banking (PN)", icon: "🔄" },
		{ id: 2, label: "Credit Card (CC)", icon: "💳" },
	];

	// Handle Next Step
	const handleNextStep = (data: any) => {
		setStep((prevStep) => prevStep + 1);
		console.log(data);
	};

	// Handle Previous Step
	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	// Handle Final Submission
	const handleFinalSubmit = (data: Step2FormData) => {
		console.log("Final data:", { ...formStep1.getValues(), ...data });
		setStep(4); // Move to success step
	};

	return (
		<div className="w-full mx-auto">
			{/* Step 1: Initial Information */}
			{step === 1 && (
				<Card className="mt-4 border-0 p-6 rounded-3xl">
					<CardHeader>
						<CardTitle className="text-center">
							Step 1 out of 3 : Initial Information
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...formStep1}>
							<form
								onSubmit={formStep1.handleSubmit(handleNextStep)}
								className="space-y-10">
								{/* Withdraw From */}
								<FormField
									control={formStep1.control}
									name="account"
									render={({ field }) => (
										<FormItem>
											<div className="flex items-center w-full bg-sky-10 justify-between px-6 py-2 rounded-3xl">
												<div className="text-sm w-1/5 items-center flex justify-between">
													<FormLabel>Withdraw From</FormLabel>
													<Separator
														orientation="vertical"
														className="h-10 w-0.5 rounded-full"
													/>
												</div>
												<FormControl>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}>
														<SelectTrigger className="w-4/5 bg-transparent border-0">
															<SelectValue placeholder="Select Account" />
														</SelectTrigger>
														<SelectContent>
															{accounts.map((account) => (
																<SelectItem
																	key={account.id}
																	value={account.label}>
																	{account.label}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
											</div>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Withdraw Method */}
								<FormField
									control={formStep1.control}
									name="method"
									render={({ field }) => (
										<FormItem>
											<div className="flex items-center w-full bg-sky-10 justify-between px-6 py-2 rounded-3xl">
												<div className="text-sm w-1/5 items-center flex justify-between">
													<FormLabel>Withdraw Method</FormLabel>
													<Separator
														orientation="vertical"
														className="h-10 w-0.5 rounded-full"
													/>
												</div>
												<FormControl>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}>
														<SelectTrigger className="w-4/5 bg-transparent border-0">
															<SelectValue placeholder="Select Method" />
														</SelectTrigger>
														<SelectContent>
															{methods.map((method) => (
																<SelectItem
																	key={method.id}
																	value={method.label}>
																	{method.icon} {method.label}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
											</div>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="mt-6 text-center">
									<Button
										type="submit"
										className="w-full"
										size="lg">
										Continue
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			)}

			{/* Step 2: Withdraw Amount */}
			{step === 2 && (
				<Card className="mt-4 border-0 p-6 rounded-3xl">
					<CardHeader>
						<CardTitle className="text-center">
							Step 2 out of 3 : Withdrawal Details
						</CardTitle>
					</CardHeader>
					<CardContent>
						<BankingDetailsCard type="wd" />
						<Form {...formStep2}>
							<form
								onSubmit={formStep2.handleSubmit(handleNextStep)}
								className="space-y-10">
								{/* Withdraw Amount */}
								<FormField
									control={formStep2.control}
									name="withdrawAmount"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<>
													<Input
														{...field}
														placeholder="Enter amount"
														className="border-0 p-6 rounded-xl"
													/>
													<p className="font-medium text-sm text-gray-8 ml-6">
														Withdraw from {formStep1.getValues("account")}
													</p>
												</>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={formStep2.control}
									name="creditedAmount"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<>
													<Input
														{...field}
														placeholder="Credited amount"
														className="border-0 p-6 rounded-xl"
													/>
													<p className="font-medium text-sm text-gray-8 ml-6">
														Withdraw from {formStep1.getValues("account")}
													</p>
												</>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="flex justify-between w-full flex-row gap-4 mt-6">
									<Button
										className="w-full"
										size="lg"
										variant="outline"
										type="button"
										onClick={handlePreviousStep}>
										Back
									</Button>
									<Button
										className="w-full"
										size="lg"
										type="submit">
										Continue
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			)}

			{/* Step 3: Confirmation */}
			{step === 3 && (
				<Card className="mt-4 border-0 p-6 rounded-3xl">
					<CardHeader>
						<CardTitle className="text-center">
							Step 3 out of 3 : Confirmation
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								{/* Withdraw From */}
								<div>
									<span className="">Withdraw From</span>
								</div>
								<div>
									<span>{formStep1.getValues("account")}</span>
								</div>

								{/* Withdraw Method */}
								<div>
									<span className="">Withdraw Method</span>
								</div>
								<div>
									<span>{formStep1.getValues("method")}</span>
								</div>

								{/* Withdraw Amount */}
								<div>
									<span className="">Withdraw Amount</span>
								</div>
								<div>
									<span>{formStep2.getValues("withdrawAmount")}</span>
								</div>

								<div>
									<span className="">Credited Amount</span>
								</div>
								<div>
									<span>{formStep2.getValues("creditedAmount")}</span>
								</div>
							</div>

							{/* Buttons */}
							<div className="flex gap-4 mt-6 w-full">
								<Button
									className="w-full"
									size="lg"
									variant="outline"
									onClick={handlePreviousStep}>
									Back
								</Button>
								<Button
									className="w-full"
									size="lg"
									onClick={formStep2.handleSubmit(handleFinalSubmit)}>
									Confirm
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			)}

			{/* Success Screen */}
			{step === 4 && (
				<Card className="mt-4 border-0 p-6 rounded-3xl">
					<CardHeader className="text-center">
						<CheckCircle
							className="mx-auto mb-4 text-green-500"
							size={120}
						/>
						<CardTitle>Withdrawal Successful!</CardTitle>
					</CardHeader>
					<CardContent className="text-center">
						<p>
							Your withdrawal has been successfully processed from (
							{formStep1.getValues("account")}). If there are any issues, please
							contact our account manager.
						</p>
						<Button
							className="mt-4"
							size="lg">
							<Link
								href={`/${
									type === "client" ? "client-panel" : "ib-panel"
								}/accounts`}>
								Back to Account
							</Link>
						</Button>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
