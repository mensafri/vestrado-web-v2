import AccountDetails from "@/components/AccountDetails";
import AccountManager from "@/components/AccountManager";
import PaymentDetails from "@/components/PaymentDetails";
import QuickAccess from "@/components/QuickAccess";
import TradingSummary from "@/components/TradingSummary";
import { transactionsHistoryColumns } from "@/components/transaction-history/columns";
import { TransactionsHistoryTable } from "@/components/transaction-history/data-table";
import { transactionHistoryData } from "@/lib/data";

const IbAccountsPage = () => {
	return (
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<TransactionsHistoryTable
					columns={transactionsHistoryColumns}
					data={transactionHistoryData}
					pageSize={4}
				/>
				<TradingSummary />
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<PaymentDetails type="ib" />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default IbAccountsPage;
