import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import LoyaltySummary from "@/components/LoyaltySummary";
import MerchandiseTabs from "@/components/merchandise-tabs/MerchandiseTabs";
import QuickAccess from "@/components/QuickAccess";

const ClientLoyaltyStorePage = () => {
	return (
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<MerchandiseTabs />
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<LoyaltySummary />
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientLoyaltyStorePage;
