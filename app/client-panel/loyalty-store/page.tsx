import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import LoyaltySummary from "@/components/LoyaltySummary";
import MerchandiseTabs from "@/components/merchandise-tabs/MerchandiseTabs";
import QuickAccess from "@/components/QuickAccess";

const ClientLoyaltyStorePage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4 overflow-hidden">
				<MerchandiseTabs />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<LoyaltySummary />
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientLoyaltyStorePage;
