import { Card, CardContent } from "@/components/ui/card";

export default function BankingDetailsCard({
	type,
}: Readonly<{ type: "depo" | "wd" }>) {
	return (
		<Card className="bg-dark-1 p-8 rounded-2xl border-0 mb-12">
			<CardContent>
				<h3 className="text-lg font-semibold mb-12 text-sky-12">
					Online Banking (PN)
				</h3>

				<div className="grid grid-cols-2 gap-24 text-sky-11">
					{/* Left Column */}
					<div className="space-y-12">
						<div className="flex items-start space-x-3">
							<div className="custom-circle"></div> {/* Custom CSS circle */}
							<div>
								<p className="text-sm">
									Minimum {type == "depo" ? "Deposit" : "Withdrawal"} Amount
								</p>
								<p className="font-medium text-sm">MYR 24</p>
							</div>
						</div>

						<div className="flex items-start space-x-3">
							<div className="custom-circle"></div> {/* Custom CSS circle */}
							<div>
								<p className="text-sm">
									Maximum {type == "depo" ? "Deposit" : "Withdrawal"} Amount
								</p>
								<p className="font-medium text-sm">MYR 32,900</p>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-12">
						<div className="flex items-start space-x-3">
							<div className="custom-circle"></div>{" "}
							{/* Custom CSS circle - same as left */}
							<div>
								<p className="text-sm w-48">
									Deposit instantly with fix amount using your online local
									banks. We do not accept payment from third-party services.
								</p>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
