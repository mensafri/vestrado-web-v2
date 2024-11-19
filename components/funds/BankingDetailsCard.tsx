import { Card, CardContent } from "@/components/ui/card";

export default function BankingDetailsCard({
	type,
}: Readonly<{ type: "depo" | "wd" }>) {
	return (
		<Card className="bg-dark-1 p-8 rounded-2xl border-0 mb-12">
			<CardContent>
				<h3 className="text-lg font-semibold mb-6 md:mb-12 text-sky-12">
					Online Banking (PN)
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-24 text-sky-11">
					{/* Left Column */}
					<div className="space-y-6 md:space-y-12">
						<div className="flex items-start space-x-3">
							<div className="w-3 h-3 bg-sky-11 rounded-full mt-1"></div>{" "}
							{/* Custom Circle */}
							<div>
								<p className="text-sm">
									Minimum {type === "depo" ? "Deposit" : "Withdrawal"} Amount
								</p>
								<p className="font-medium text-sm">MYR 24</p>
							</div>
						</div>

						<div className="flex items-start space-x-3">
							<div className="w-3 h-3 bg-sky-11 rounded-full mt-1"></div>{" "}
							{/* Custom Circle */}
							<div>
								<p className="text-sm">
									Maximum {type === "depo" ? "Deposit" : "Withdrawal"} Amount
								</p>
								<p className="font-medium text-sm">MYR 32,900</p>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-6 md:space-y-12">
						<div className="flex items-start space-x-3">
							<div className="w-3 h-3 bg-sky-11 rounded-full mt-1"></div>{" "}
							{/* Custom Circle */}
							<div>
								<p className="text-sm">
									{type === "depo"
										? "Deposit instantly with a fixed amount using your online local banks. We do not accept payment from third-party services."
										: "Withdraw directly to your local bank account. Ensure the account matches your registered details."}
								</p>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
