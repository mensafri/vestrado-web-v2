import AccountDetails from "@/components/AccountDetails";
import AccountManager from "@/components/AccountManager";
import PaymentDetails from "@/components/PaymentDetails";
import QuickAccess from "@/components/QuickAccess";
import TradingSummary from "@/components/TradingSummary";
import { transactionsHistoryColumns } from "@/components/transaction-history/columns";
import { TransactionsHistoryTable } from "@/components/transaction-history/data-table";
import { transactionHistoryData } from "@/components/transaction-history/dummy";

const ClientAccountPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4 ">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<TransactionsHistoryTable
					columns={transactionsHistoryColumns}
					data={transactionHistoryData}
					pageSize={4}
				/>
				<TradingSummary />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PaymentDetails />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientAccountPage;
