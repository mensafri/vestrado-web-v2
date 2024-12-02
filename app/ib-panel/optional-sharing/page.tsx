import CustomLoading from "@/components/CustomLoading";
import PromoCarousel from "@/components/PromoCarousel";
import SubIbSettings from "@/components/SubIbSettings";
import dynamic from "next/dynamic";
const IbTiersCard = dynamic(() => import("@/components/IbTiersCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const StatCard = dynamic(() => import("@/components/StatCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

const IbOptionalSharingPage = () => {
	return (
		<div className="flex flex-col md:flex-row w-full md:justify-between p-4 md:space-x-4 space-y-4 md:space-y-0">
			<div className="w-full md:w-2/3 flex flex-col gap-4">
				<SubIbSettings />
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4 items-center">
				<PromoCarousel />
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
			</div>
		</div>
	);
};

export default IbOptionalSharingPage;
