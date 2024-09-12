import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import { fullTransactionsHistoryColumns } from "@/components/full-transaction-history/columns";
import { FullTransactionsHistoryTable } from "@/components/full-transaction-history/data-table";
import QuickAccess from "@/components/QuickAccess";
import { transactionHistoryData } from "@/lib/data";

const ClientHistoryPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4 overflow-hidden">
				{/* The table will live here, wrapped in a container that will control its width */}
				<div className="overflow-x-auto">
					<FullTransactionsHistoryTable
						columns={fullTransactionsHistoryColumns}
						data={transactionHistoryData}
						pageSize={8}
					/>
				</div>
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientHistoryPage;
