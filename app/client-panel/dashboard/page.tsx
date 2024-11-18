import AccountDetails from "@/components/AccountDetails";
import AccountManager from "@/components/AccountManager";
import CopyTrading from "@/components/CopyTrading";
import ClientDashboard from "@/components/ClientDashboard";
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
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<ClientDashboard />
				<TransactionsHistoryTable
					columns={transactionsHistoryColumns}
					data={transactionHistoryData}
					pageSize={4}
				/>
				<MarketOverviewWidget />
				<CopyTrading type="client" />
				<LatestUpdates type="client" />
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
				<TopInstruments />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientDashboardPage;
