import dynamic from "next/dynamic";
import CustomLoading from "@/components/CustomLoading";

const StatCard = dynamic(() => import("@/components/StatCard"), {
	ssr: false,
	loading: () => <CustomLoading />,
});

export default function ClientDashboard() {
	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
			<StatCard
				title="Total Profit"
				value={1230.81}
				unit="$"
				total={2000} // Total target value
			/>
			<StatCard
				title="Total Lot Traded"
				value={19}
				unit="Lots"
				total={100} // Total target value
			/>
		</div>
	);
}
