export default function LoyaltySummary() {
	return (
		<div className="bg-black text-white p-8 rounded-3xl w-full">
			<h3 className="font-semibold text-lg mb-8">Loyalty Summary</h3>
			<div className="space-y-8">
				{/* Total Points */}
				<div className="flex justify-between items-center">
					<p className="text-sky-14">Total Points</p>
					<p className="font-semibold">658 Pts</p>
				</div>

				{/* Lots Collected */}
				<div className="flex justify-between items-center">
					<p className="text-sky-14">Lots Collected</p>
					<p className="font-semibold">67 Lots</p>
				</div>

				{/* Your Ranking */}
				<div className="flex justify-between items-center">
					<p className="text-sky-14">Your Ranking</p>
					<div className="flex items-center space-x-2">
						<span className="w-3 h-3 bg-[#B87333] rounded-full"></span>
						<p className="font-semibold">Bronze</p>
					</div>
				</div>
			</div>
		</div>
	);
}
