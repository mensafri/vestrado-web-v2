"use client";

import { useEffect } from "react";
import { Input } from "./ui/input";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import Link from "next/link";
import { Button } from "./ui/button";

const ForgotPasswordForm = () => {
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const doSubmit = () => {
		const userCaptchaInput = document.getElementById(
			"user_captcha_input",
		) as HTMLInputElement | null;

		if (userCaptchaInput) {
			const userCaptcha = userCaptchaInput.value;

			if (validateCaptcha(userCaptcha) === true) {
				alert("Captcha Matched");
				loadCaptchaEnginge(6);
				userCaptchaInput.value = "";
			} else {
				alert("Captcha Does Not Match");
				userCaptchaInput.value = "";
			}
		} else {
			alert("Captcha input field not found");
		}
	};

	return (
		<div className="flex flex-col bg-white justify-center items-center w-full md:w-2/3 h-full md:h-4/5 rounded-xl p-4 md:p-8">
			<div className="flex flex-col gap-4 md:gap-8 w-full">
				<div>
					<h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
						Forgot Password
					</h1>
					<p className="font-light text-center md:text-left">
						Enter details below
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex w-full flex-col">
						<Input
							placeholder="Enter your email"
							className="bg-white"
						/>
					</div>
					<div className="flex w-full flex-col">
						<div className="row mt-3">
							<LoadCanvasTemplate />
						</div>

						<div className="col mt-3">
							<div>
								<Input
									className="bg-white"
									placeholder="Type the word above to continue"
									id="user_captcha_input"
									name="user_captcha_input"
									type="text"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full gap-4">
					<Button
						size="lg"
						asChild>
						<Link href={"/set-new-password"}>Continue</Link>
					</Button>
					<Button
						size="lg"
						asChild
						variant="outline">
						<Link href={"/forgot-password"}> Back</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;
