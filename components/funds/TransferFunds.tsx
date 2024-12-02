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
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

// Step 1 schema for transfer accounts
const step1Schema = z.object({
	fromAccount: z.string().min(1, "Please select a 'From' account"),
	toAccount: z.string().min(1, "Please select a 'To' account"),
});

// Step 2 schema for transfer details
const step2Schema = z.object({
	transferAmount: z.string().min(1, "Enter transfer amount"),
	creditedAmount: z.string().min(1, "Enter credited amount"),
});

// Form types based on schema
type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;

export default function TransferFunds({ type }: { type: "ib" | "client" }) {
	const [step, setStep] = useState(1);

	// Form handlers for step 1 and step 2
	const formStep1 = useForm<Step1FormData>({
		resolver: zodResolver(step1Schema),
		defaultValues: {
			fromAccount: "",
			toAccount: "",
		},
	});

	const formStep2 = useForm<Step2FormData>({
		resolver: zodResolver(step2Schema),
		defaultValues: {
			transferAmount: "",
		},
	});

	// Mock data for accounts
	const accounts = [
		{ id: 1, label: "Frux Account (ECN) 3421140 (2882.00 USD)" },
		{ id: 2, label: "Frux Account (STP) 8734120 (1200.00 USD)" },
	];

	// Handle step transitions
	const handleNextStep = (data: any) => {
		setStep((prevStep) => prevStep + 1);
	};

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

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
								{/* Transfer From */}
								<FormField
									control={formStep1.control}
									name="fromAccount"
									render={({ field }) => (
										<FormItem>
											<div className="flex items-center w-full bg-sky-10 justify-between px-6 py-2 rounded-3xl">
												<div className="text-sm w-1/5 items-center flex justify-between">
													<FormLabel>Transfer From</FormLabel>
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

								{/* Transfer To */}
								<FormField
									control={formStep1.control}
									name="toAccount"
									render={({ field }) => (
										<FormItem>
											<div className="flex items-center w-full bg-sky-10 justify-between px-6 py-2 rounded-3xl">
												<div className="text-sm w-1/5 items-center flex justify-between">
													<FormLabel>Transfer To</FormLabel>
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

			{/* Step 2: Transfer Amount */}
			{step === 2 && (
				<Card className="mt-4 border-0 p-6 rounded-3xl">
					<CardHeader>
						<CardTitle className="text-center">
							Step 2 out of 3 : Transfer Amount
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...formStep2}>
							<form
								onSubmit={formStep2.handleSubmit(handleNextStep)}
								className="space-y-10">
								{/* Transfer Amount */}
								<FormField
									control={formStep2.control}
									name="transferAmount"
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
														Transfer from {formStep1.getValues("fromAccount")}{" "}
														to {formStep1.getValues("toAccount")}
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
														Transfer from {formStep1.getValues("fromAccount")}{" "}
														to {formStep1.getValues("toAccount")}
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
								{/* Transfer From */}
								<div>
									<span className="">Transfer From</span>
								</div>
								<div>
									<span>{formStep1.getValues("fromAccount")}</span>
								</div>

								{/* Transfer To */}
								<div>
									<span className="">Transfer To</span>
								</div>
								<div>
									<span>{formStep1.getValues("toAccount")}</span>
								</div>

								{/* Transfer Amount */}
								<div>
									<span className="">Transfer Amount</span>
								</div>
								<div>
									<span>{formStep2.getValues("transferAmount")}</span>
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
						<CardTitle>Transfer Successful!</CardTitle>
					</CardHeader>
					<CardContent className="text-center">
						<p>
							Your transfer has been successfully processed from{" "}
							{formStep1.getValues("fromAccount")} to{" "}
							{formStep1.getValues("toAccount")}.
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
