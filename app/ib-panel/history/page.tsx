import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import { fullTransactionsHistoryColumns } from "@/components/full-transaction-history/columns";
import { FullTransactionsHistoryTable } from "@/components/full-transaction-history/data-table";
import QuickAccess from "@/components/QuickAccess";
import { transactionHistoryData } from "@/lib/data";

const IbHistoryPage = () => {
	return (
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<div className="overflow-x-hidden">
					<FullTransactionsHistoryTable
						columns={fullTransactionsHistoryColumns}
						data={transactionHistoryData}
						pageSize={8}
					/>
				</div>
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default IbHistoryPage;
