import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import LatestUpdates from "@/components/LatestUpdates";
import Notifications from "@/components/Notifications";
import QuickAccess from "@/components/QuickAccess";

const ClientNotificationsPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4 ">
			<div className="w-2/3 flex flex-col gap-4">
				<Notifications />
				<LatestUpdates type="client" />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientNotificationsPage;
