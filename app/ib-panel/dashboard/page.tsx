import dynamic from "next/dynamic";
import CustomLoading from "@/components/CustomLoading"; // Make sure to create this or use an existing loader
import CopyTrading from "@/components/CopyTrading";
import LatestUpdates from "@/components/LatestUpdates";

import AccountDetails from "@/components/AccountDetails";
import BdManager from "@/components/BdManager";
import ClientRegistrationPerformance from "@/components/ClientRegistrationPerformance";
import DirectReferralsTable from "@/components/DirectReferralsTable";
import IbDashboard from "@/components/IbDashboard";
import PromoCarousel from "@/components/PromoCarousel";
import QuickAccess from "@/components/QuickAccess";
const IbTiersCard = dynamic(() => import("@/components/IbTiersCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const StatCard = dynamic(() => import("@/components/StatCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const IbDashboardPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<IbDashboard />
				<ClientRegistrationPerformance />
				<DirectReferralsTable />
				<CopyTrading type="ib" />
				<LatestUpdates type="ib" />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
				<IbTiersCard />
				<StatCard
					title="Registration"
					total={100}
					unit=""
					value={72}
				/>
				<StatCard
					title="Commission"
					total={10000}
					unit="$"
					value={-870}
				/>
				<StatCard
					title="Commission"
					total={1000}
					unit="$"
					value={-123}
				/>
				<QuickAccess />
				<BdManager />
			</div>
		</div>
	);
};

export default IbDashboardPage;
