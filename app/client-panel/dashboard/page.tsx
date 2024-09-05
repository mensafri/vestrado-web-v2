import AccountDetails from "@/components/AccountDetails";
import Dashboard from "@/components/Dashboard";
import MarketOverviewWidget from "@/components/MarketOverviewWidget";
import PromoCarousel from "@/components/PromoCarousel";
import TopInstruments from "@/components/TopInstruments";
import { transactionsHistoryColumns } from "@/components/transaction-history/columns";
import { TransactionsHistoryTable } from "@/components/transaction-history/data-table";
import { transactionHistoryData } from "@/components/transaction-history/dummy";

const ClientDashboardPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4 ">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<Dashboard />
				<TransactionsHistoryTable
					columns={transactionsHistoryColumns}
					data={transactionHistoryData}
					pageSize={4}
				/>
				<MarketOverviewWidget />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
				<TopInstruments />
			</div>
		</div>
	);
};

export default ClientDashboardPage;
