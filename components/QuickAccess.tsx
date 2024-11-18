import { Button } from "@/components/ui/button";
import { ArrowUp, Check, Play } from "lucide-react";

const QuickAccess = () => {
	return (
		<div className="w-full bg-white rounded-3xl p-4 md:p-6">
			<h2 className="text-lg font-bold mb-6">Quick Access</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{/* Live Account Button */}
				<Button
					variant="outline"
					className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-md h-36 w-full border-0">
					<div className="w-12 h-12 text-white rounded-full bg-[#3BC83B] mb-2 flex justify-center items-center">
						<Check />
					</div>
					<p className="font-semibold text-black text-center text-sm">
						Open Live Account
					</p>
				</Button>

				{/* Demo Account Button */}
				<Button
					variant="outline"
					className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-md h-36 w-full border-0">
					<div className="w-12 h-12 text-gray-400 rounded-full bg-gray-200 mb-2 flex justify-center items-center">
						<Play />
					</div>
					<p className="font-semibold text-black text-center text-sm">
						Open Demo Account
					</p>
				</Button>

				{/* Upload Documents Button */}
				<Button
					variant="outline"
					className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-md h-36 w-full border-0">
					<div className="w-12 h-12 text-gray-400 rounded-full bg-gray-200 mb-2 flex justify-center items-center">
						<ArrowUp />
					</div>
					<p className="font-semibold text-black text-center text-sm">
						Upload Documents
					</p>
				</Button>
			</div>

			{/* Bottom buttons */}
			<div className="mt-6 space-y-4">
				<Button
					size="lg"
					variant="outline"
					className="w-full bg-gray-100 text-black font-semibold border-0">
					Open New Ticket
				</Button>

				<Button
					size="lg"
					variant="outline"
					className="w-full bg-gray-100 text-black font-semibold border-0">
					Help Desk
				</Button>
			</div>
		</div>
	);
};

export default QuickAccess;
