import AccountManager from "@/components/AccountManager";
import AccountDetailsMini from "@/components/AccountsDetailsMini";
import ActivePromotionsCarousel from "@/components/ActivePromotionsCarousel";
import PastPromotionsCarousel from "@/components/PastPromotionsCarousel";
import QuickAccess from "@/components/QuickAccess";
import TourSeminarCarousel from "@/components/TourSeminarCarousel";

const IbPromotionsPage = () => {
	return (
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<ActivePromotionsCarousel />
				<TourSeminarCarousel />
				<PastPromotionsCarousel />
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<AccountDetailsMini />
				<QuickAccess />
				<AccountManager />
			</div>
		</div>
	);
};

export default IbPromotionsPage;
