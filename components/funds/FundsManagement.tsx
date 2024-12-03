import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DepositFunds from "./DepositFunds";
import WithdrawFunds from "./WithdrawFunds";
import TransferFunds from "./TransferFunds";

export default function FundsManagement({ type }: { type: "ib" | "client" }) {
	return (
		<div className="w-full mx-auto mt-4 ">
			<Tabs
				defaultValue="deposit"
				className="space-y-5">
				{/* Tabs List */}
				<TabsList className="flex justify-between px-4 overflow-x-auto overflow-y-hidden">
					<TabsTrigger
						value="deposit"
						className="px-6 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 focus-visible:border-primary focus-visible:outline-none">
						Deposit Funds
					</TabsTrigger>
					<TabsTrigger
						value="withdraw"
						className="px-6 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 focus-visible:border-primary focus-visible:outline-none">
						Withdraw Funds
					</TabsTrigger>
					<TabsTrigger
						value="transfer"
						className="px-6 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 focus-visible:border-primary focus-visible:outline-none">
						Transfer Funds
					</TabsTrigger>
				</TabsList>

				{/* Tabs Content */}
				<div className="p-4 bg-white shadow-md rounded-lg">
					<TabsContent value="deposit">
						<DepositFunds type={type} />
					</TabsContent>

					<TabsContent value="withdraw">
						<WithdrawFunds type={type} />
					</TabsContent>

					<TabsContent value="transfer">
						<TransferFunds type={type} />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
