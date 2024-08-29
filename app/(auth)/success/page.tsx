import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";

const SuccessPage = () => {
	return (
		<div className="w-full justify-center items-center flex flex-col h-5/6">
			<div className="flex flex-col bg-white justify-center items-center w-2/3 h-[42rem] rounded-xl py-12 px-8 gap-6 mt-8">
				<CircleCheckBig className="h-36 w-3/6 text-green-1" />
				<p className="text-2xl font-bold">Account Created!</p>
				<p className="text-lg text-center text-gray-2">
					Congratulations! You are now one of us. You can log in to your account
					by clicking the button below.
				</p>
				<Button
					className="w-full"
					size="lg">
					Sign in to your account
				</Button>
			</div>
		</div>
	);
};

export default SuccessPage;
