import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import FundsManagement from "@/components/funds/FundsManagement";
import QuickAccess from "@/components/QuickAccess";

const ClientFundsPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4 ">
			<div className="w-2/3 flex flex-col gap-4">
				<FundsManagement />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default ClientFundsPage;
