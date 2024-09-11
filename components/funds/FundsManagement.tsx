import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DepositFunds from "./DepositFunds";
import WithdrawFunds from "./WithdrawFunds";
import TransferFunds from "./TransferFunds";

export default function FundsManagement() {
	return (
		<div className="w-full mx-auto mt-4">
			<Tabs defaultValue="deposit">
				<TabsList className="flex justify-between px-4">
					<TabsTrigger value="deposit">Deposit Funds</TabsTrigger>
					<TabsTrigger value="withdraw">Withdraw Funds</TabsTrigger>
					<TabsTrigger value="transfer">Transfer Funds</TabsTrigger>
				</TabsList>

				<TabsContent value="deposit">
					<DepositFunds />
				</TabsContent>

				<TabsContent value="withdraw">
					<WithdrawFunds />
				</TabsContent>

				<TabsContent value="transfer">
					<TransferFunds />
				</TabsContent>
			</Tabs>
		</div>
	);
}
