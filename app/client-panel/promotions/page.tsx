import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import ActivePromotionsCarousel from "@/components/ActivePromotionsCarousel";
import PastPromotionsCarousel from "@/components/PastPromotionsCarousel";
import QuickAccess from "@/components/QuickAccess";
import TourSeminarCarousel from "@/components/TourSeminarCarousel";

const CLientPromotionsPage = () => {
	return (
		<div className="flex flex-row w-full justify-between p-4 space-x-4">
			<div className="w-2/3 flex flex-col gap-4 overflow-hidden">
				<ActivePromotionsCarousel />
				<TourSeminarCarousel />
				<PastPromotionsCarousel />
			</div>
			<div className="w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default CLientPromotionsPage;
