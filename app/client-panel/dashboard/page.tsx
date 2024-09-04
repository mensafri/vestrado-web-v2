import AccountDetails from "@/components/AccountDetails";
import Dashboard from "@/components/Dashboard";
import PromoCarousel from "@/components/PromoCarousel";

const ClientDashboardPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4">
				<AccountDetails />
				<Dashboard />
			</div>
			<div className="w-1/3">
				<PromoCarousel />
			</div>
		</div>
	);
};

export default ClientDashboardPage;
