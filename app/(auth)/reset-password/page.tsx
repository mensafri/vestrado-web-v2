import { MailCheck } from "lucide-react";
import Link from "next/link";

const ResetPassword = () => {
	return (
		<section className="flex-center size-full max-sm:px-6">
			<div className="flex flex-col bg-white justify-between items-center w-full md:w-2/3 h-full md:h-4/5 rounded-xl p-4 md:p-8">
				<div className="flex flex-col justify-center items-center gap-4 mt-16">
					<MailCheck
						color="green"
						absoluteStrokeWidth
						size={150}
					/>
					<p className="font-light text-center w-64">
						Password reset link has been sent to your email. Please check your
						inbox to retrieve the link.
					</p>
				</div>
				<div className="flex flex-row gap-1">
					<p className="text-center font-light">Haven’t received?</p>
					<Link
						href="/forgot-password"
						className="underline font-bold">
						Resend Link
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ResetPassword;
