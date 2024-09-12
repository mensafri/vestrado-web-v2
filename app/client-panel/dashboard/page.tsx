import AccountDetails from "@/components/AccountDetails";
import AccountManager from "@/components/AccountManager";
import CopyTrading from "@/components/CopyTrading";
import Dashboard from "@/components/Dashboard";
import LatestUpdates from "@/components/LatestUpdates";
import MarketOverviewWidget from "@/components/MarketOverviewWidget";
import PromoCarousel from "@/components/PromoCarousel";
import QuickAccess from "@/components/QuickAccess";
import TopInstruments from "@/components/TopInstruments";
import { transactionsHistoryColumns } from "@/components/transaction-history/columns";
import { TransactionsHistoryTable } from "@/components/transaction-history/data-table";
import { transactionHistoryData } from "@/lib/data";

const ClientDashboardPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<Dashboard />
				<TransactionsHistoryTable
					columns={transactionsHistoryColumns}
					data={transactionHistoryData}
					pageSize={4}
				/>
				<MarketOverviewWidget />
				<CopyTrading />
				<LatestUpdates />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
				<TopInstruments />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientDashboardPage;
