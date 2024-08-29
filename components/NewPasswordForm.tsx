import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewPasswordForm = () => {
	return (
		<div className="flex flex-col bg-white justify-center items-center w-full md:w-2/3 h-full md:h-4/5 rounded-xl p-4 md:p-8">
			<div className="flex flex-col gap-4 md:gap-8 w-full">
				<div>
					<h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
						Reset Password
					</h1>
					<p className="font-light text-center md:text-left">
						Enter your new password
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex w-full flex-col">
						<Input
							placeholder="New Password"
							className="bg-white"
						/>
					</div>
					<div className="flex w-full flex-col">
						<Input
							placeholder="Confirm Password"
							className="bg-white"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full gap-4">
					<Button
						asChild
						size="lg">
						<Link href="/reset-password">Reset And Login</Link>
					</Button>
					<Button
						variant="outline"
						asChild
						size="lg">
						<Link href="/forgot-password">Back</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NewPasswordForm;
