import AccountDetails from "@/components/AccountDetails";
import ClientRegistrationPerformance from "@/components/ClientRegistrationPerformance";
import { IbDashboard } from "@/components/IbDashboard";
import PromoCarousel from "@/components/PromoCarousel";

const IbDashboardPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<IbDashboard />
				<ClientRegistrationPerformance />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
			</div>
		</div>
	);
};

export default IbDashboardPage;
