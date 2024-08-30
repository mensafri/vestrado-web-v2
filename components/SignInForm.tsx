"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/utils";
import { z } from "zod";
import { Form, FormControl, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const SignInForm = () => {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const formSchema = signInSchema();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		// Do something with the form data.
		// ✅ This will be type-safe and validated.
		setIsLoading(true);

		try {
			console.log(data);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col bg-white justify-center items-center w-full md:w-2/3 h-full md:h-5/6 rounded-xl p-4 md:p-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4 md:gap-6 w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-xl md:text-2xl font-semibold text-center md:text-left">
							Invest smart, trade smarter.
						</h1>
						<p className="font-light text-center md:text-left">
							Sign in and kickstart your trading journey.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<div className="form-item">
									<div className="flex w-full flex-col">
										<FormControl>
											<div className="flex flex-col gap-3">
												<Label htmlFor="email">Email</Label>
												<Input
													placeholder="Enter your email"
													{...field}
												/>
											</div>
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
											<div className="flex flex-col gap-3">
												<Label htmlFor="password">Password</Label>
												<Input
													type="password"
													placeholder="Enter your password"
													{...field}
												/>
											</div>
										</FormControl>
										<FormMessage className="form-message mt-2" />
									</div>
								</div>
							)}
						/>
						<div className="flex flex-col md:flex-row justify-between text-gray-1">
							<div className="flex items-center space-x-2">
								<Switch id="remember-me" />
								<Label htmlFor="remember-me">Remember Me</Label>
							</div>
							<Link
								href="/forgot-password"
								className="font-montserrat underline">
								Forgot Password
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Button
							className="w-full h-12 md:h-14 font-montserrat"
							onClick={() => router.push("/client-panel/dashboard")}>
							Sign In
						</Button>
						<Button
							type="button"
							variant="outline"
							className="w-full h-12 md:h-14 font-montserrat flex flex-row gap-4">
							<div className="w-7 h-7 relative">
								<Image
									src="/icons/google.png"
									fill
									className="object-cover"
									alt="Google Logo"
								/>
							</div>
							Sign in with Google
						</Button>
					</div>
					<div className="flex flex-row justify-center items-center text-lg gap-1 text-gray-1">
						<p>Don’t have Vestrado’s account yet?</p>
						<Link
							href="/sign-up"
							className="font-montserrat font-bold underline">
							Sign up now
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SignInForm;
