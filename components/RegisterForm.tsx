"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "@/lib/utils";
import { motion } from "framer-motion";
import {
	Form,
	FormControl,
	FormField,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const router = useRouter();
	const [value, setValue] = useState("");
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const delta = currentStep - previousStep;

	const formSchema = signUpSchema(value);

	const form = useForm<Inputs>({
		resolver: zodResolver(formSchema),
	});

	const steps = [
		{
			id: "Step 1 out of 2",
		},
		{
			id: "Step 2 out of 2",
		},
		{
			id: "Step 4 out of 2",
		},
	];

	type Inputs = z.infer<typeof formSchema>;

	const processForm: SubmitHandler<Inputs> = async (data) => {
		console.log(data);
		form.reset();
	};

	type FieldName = keyof Inputs;

	const next = async () => {
		// const fields = steps[currentStep].fields;
		// const output = await form.trigger(fields as FieldName[], {
		// 	shouldFocus: true,
		// });

		// if (!output) return;

		if (currentStep < steps.length - 1) {
			if (currentStep === steps.length - 2) {
				await form.handleSubmit(processForm)();
			}
			setPreviousStep(currentStep);
			setCurrentStep((step) => step + 1);
		}
	};

	const prev = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((step) => step - 1);
		}
	};

	const submit = async () => {
		router.push("/success");
	};

	const onSelect = (e: string) => {
		setValue(e);
		setCurrentStep((step) => step + 1);
	};

	return (
		<div className="flex flex-col bg-white justify-center items-center w-2/3 h-[42rem] rounded-xl py-12 px-8">
			<div className="flex flex-col gap-4 md:gap-8 w-full">
				<Form {...form}>
					<form
						className=""
						onSubmit={form.handleSubmit(processForm)}>
						{currentStep === 0 && (
							<motion.div
								className="flex flex-col gap-4 justify-center items-center"
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}>
								<div className="flex flex-col gap-2 justify-center items-center">
									<h1 className="text-2xl font-bold">Register Account</h1>
									<p className="font-light">Step 1 out of 2</p>
								</div>
								<div className="flex flex-col w-full gap-6">
									<Select onValueChange={onSelect}>
										<SelectTrigger>
											<SelectValue placeholder="I want to register as" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="individu">Individu Client</SelectItem>
											<SelectItem value="corporate">
												Corporate Client
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</motion.div>
						)}

						{currentStep === 1 && (
							<motion.div
								className="flex flex-col gap-4 justify-center items-center"
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}>
								<div className="flex flex-col w-full gap-6">
									{value === "individu" ? (
										<>
											<div className="flex flex-col gap-2 justify-center items-center">
												<h1 className="text-2xl font-bold">Register Account</h1>
												<p className="font-light">Step 2 out of 2</p>
											</div>
											<FormField
												control={form.control}
												name="email"
												render={({ field }) => (
													<div className="form-item">
														<div className="flex w-full flex-col">
															<FormControl>
																<Input
																	placeholder="Email"
																	{...field}
																/>
															</FormControl>
															<FormMessage className="form-message mt-2" />
														</div>
													</div>
												)}
											/>
											<FormField
												control={form.control}
												name="password"
												render={({ field }) => (
													<div className="form-item">
														<div className="flex w-full flex-col">
															<FormControl>
																<Input
																	type="password"
																	placeholder="Password"
																	{...field}
																/>
															</FormControl>
															<FormMessage className="form-message mt-2" />
														</div>
													</div>
												)}
											/>

											<FormField
												control={form.control}
												name="repeatPassword"
												render={({ field }) => (
													<div className="form-item">
														<div className="flex w-full flex-col">
															<FormControl>
																<Input
																	type="password"
																	placeholder="Repeat Password"
																	{...field}
																/>
															</FormControl>
															<FormMessage className="form-message mt-2" />
														</div>
													</div>
												)}
											/>

											<FormField
												control={form.control}
												name="ibPromoCode"
												render={({ field }) => (
													<div className="form-item">
														<div className="flex w-full flex-col">
															<FormControl>
																<Input
																	placeholder="IB Promo Code (Optional)"
																	{...field}
																/>
															</FormControl>
															<FormMessage className="form-message mt-2" />
														</div>
													</div>
												)}
											/>

											<div className="flex items-center space-x-2">
												<Checkbox id="terms" />
												<Label
													htmlFor="terms"
													className="text-sm text-gray-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													I accept Risk Warning, AML Policy, Privacy Policy,
													Terms and Conditions, Trading Execution Risks,
													Leverage & Margin Policy
												</Label>
											</div>
											<div className="flex items-center space-x-2">
												<Checkbox id="yearsOld" />
												<Label
													htmlFor="yearsOld"
													className="text-sm text-gray-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													I am Above 18 years old
												</Label>
											</div>
											<Button
												size="lg"
												onClick={submit}
												className="w-full ">
												Continue
											</Button>
										</>
									) : (
										<motion.div
											className="flex flex-col gap-4 justify-center items-center"
											initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}
											key="non-individu">
											<div className="flex flex-col gap-2 justify-center items-center">
												<h1 className="text-2xl font-bold">Register Account</h1>
												<p className="font-light">Company Information</p>
											</div>
											<div className="flex flex-col w-full gap-6">
												<FormField
													control={form.control}
													name="companyName"
													render={({ field }) => (
														<div className="form-item">
															<div className="flex w-full flex-col">
																<FormControl>
																	<Input
																		placeholder="Company Name"
																		{...field}
																	/>
																</FormControl>
																<FormMessage className="form-message mt-2" />
															</div>
														</div>
													)}
												/>
												<FormField
													control={form.control}
													name="registrationNumber"
													render={({ field }) => (
														<div className="form-item">
															<div className="flex w-full flex-col">
																<FormControl>
																	<Input
																		placeholder="Registration Number"
																		{...field}
																	/>
																</FormControl>
																<FormMessage className="form-message mt-2" />
															</div>
														</div>
													)}
												/>
												<FormField
													control={form.control}
													name="country"
													render={({ field }) => (
														<div className="form-item">
															<div className="flex w-full flex-col">
																<FormControl>
																	<Select
																		value={field.value}
																		onValueChange={field.onChange}>
																		<SelectTrigger>
																			<SelectValue placeholder="Country of Residence" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectItem value="Country of Residence">
																				Country of Residence
																			</SelectItem>
																			<SelectItem value="Country of Residence">
																				Country of Residence
																			</SelectItem>
																		</SelectContent>
																	</Select>
																</FormControl>
																<FormMessage className="form-message mt-2" />
															</div>
														</div>
													)}
												/>
												<FormField
													control={form.control}
													name="phoneNumber"
													render={({ field }) => (
														<div className="form-item">
															<div className="flex w-full flex-col">
																<FormControl>
																	<Input
																		placeholder="Phone Number"
																		{...field}
																	/>
																</FormControl>
																<FormMessage className="form-message mt-2" />
															</div>
														</div>
													)}
												/>
												<Button
													size="lg"
													onClick={next}
													className="w-full ">
													Continue
												</Button>
												<Button
													variant="outline"
													size="lg"
													onClick={prev}
													className="w-full ">
													Back
												</Button>
											</div>
										</motion.div>
									)}
								</div>
							</motion.div>
						)}

						{currentStep === 2 ? (
							value === "corporate" ? (
								<motion.div
									className="flex flex-col gap-4 justify-center items-center"
									initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									key="non-individu">
									<div className="flex flex-col w-full gap-6">
										<div className="flex flex-col gap-2 justify-center items-center">
											<h1 className="text-2xl font-bold">Register Account</h1>
											<p className="font-light">Representative Information</p>
										</div>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<div className="form-item">
													<div className="flex w-full flex-col">
														<FormControl>
															<Input
																placeholder="Email"
																{...field}
															/>
														</FormControl>
														<FormMessage className="form-message mt-1" />
													</div>
												</div>
											)}
										/>
										<FormField
											control={form.control}
											name="password"
											render={({ field }) => (
												<div className="form-item">
													<div className="flex w-full flex-col">
														<FormControl>
															<Input
																type="password"
																placeholder="Password"
																{...field}
															/>
														</FormControl>
														<FormMessage className="form-message mt-1" />
													</div>
												</div>
											)}
										/>

										<FormField
											control={form.control}
											name="repeatPassword"
											render={({ field }) => (
												<div className="form-item">
													<div className="flex w-full flex-col">
														<FormControl>
															<Input
																type="password"
																placeholder="Repeat Password"
																{...field}
															/>
														</FormControl>
														<FormMessage className="form-message mt-1" />
													</div>
												</div>
											)}
										/>

										<FormField
											control={form.control}
											name="ibPromoCode"
											render={({ field }) => (
												<div className="form-item">
													<div className="flex w-full flex-col">
														<FormControl>
															<Input
																placeholder="IB Promo Code (Optional)"
																{...field}
															/>
														</FormControl>
														<FormMessage className="form-message mt-1" />
													</div>
												</div>
											)}
										/>

										<div className="flex items-center space-x-2">
											<Checkbox id="terms" />
											<Label
												htmlFor="terms"
												className="text-sm text-gray-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												I accept Risk Warning, AML Policy, Privacy Policy, Terms
												and Conditions, Trading Execution Risks, Leverage &
												Margin Policy
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<Checkbox id="yearsOld" />
											<Label
												htmlFor="yearsOld"
												className="text-sm text-gray-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												I am Above 18 years old
											</Label>
										</div>
										<Button
											onClick={submit}
											className="w-full ">
											Continue
										</Button>
									</div>
								</motion.div>
							) : null
						) : null}

						{/* {value && (
							<div className="flex flex-col justify-between mt-8 gap-6">
								<Button
									onClick={prev}
									disabled={currentStep === 0}
									className="w-full ">
									Back
								</Button>
								<Button
									onClick={next}
									className="w-full ">
									Continue
								</Button>
							</div>
						)} */}
					</form>
				</Form>
			</div>
		</div>
	);
};

export default RegisterForm;
