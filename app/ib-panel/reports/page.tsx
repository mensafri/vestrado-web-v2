import dynamic from "next/dynamic";
import CustomLoading from "@/components/CustomLoading";

import AccountCommissionTable from "@/components/AccountCommissionTable";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import BdManager from "@/components/BdManager";
import QuickAccess from "@/components/QuickAccess";
import ClientCommissionTable from "@/components/ClientCommissionTable";
const IbTiersCard = dynamic(() => import("@/components/IbTiersCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const StatCard = dynamic(() => import("@/components/StatCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const IbReportsPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4 overflow-hidden">
				<div className="overflow-x-auto">
					<AccountCommissionTable />
				</div>
				<div className="overflow-x-auto">
					<ClientCommissionTable />
				</div>
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
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

export default IbReportsPage;
