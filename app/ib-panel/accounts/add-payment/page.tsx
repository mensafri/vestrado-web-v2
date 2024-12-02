import AccountManager from "@/components/AccountManager";
import PaymentDetailForm from "@/components/PaymentDetailForm";
import PaymentDetails from "@/components/PaymentDetails";
import QuickAccess from "@/components/QuickAccess";

const AddPaymentPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4 ">
			<div className="w-2/3 flex flex-col gap-4">
				<PaymentDetailForm />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<PaymentDetails />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default AddPaymentPage;
