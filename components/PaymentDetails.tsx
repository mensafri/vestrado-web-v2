import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentDetails = ({ type }: { type: "ib" | "client" }) => {
	const paymentData = [
		{ method: "Online Banking", bank: "Ambank", status: "Approved" },
		{ method: "Online Banking", bank: "Maybank", status: "Approved" },
		{ method: "Online Banking", bank: "Al Rahnu", status: "Declined" },
		{ method: "Online Banking", bank: "CIMB", status: "Approved" },
		{ method: "Online Banking", bank: "Public Bank", status: "Approved" },
		{ method: "Online Banking", bank: "RHB", status: "Declined" },
		{ method: "Online Banking", bank: "HSBC", status: "Approved" },
		{
			method: "Online Banking",
			bank: "Standard Chartered",
			status: "Approved",
		},
	];

	// const [visiblePayments, setVisiblePayments] = useState(3);

	return (
		<div className="w-full p-6 bg-white rounded-3xl">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-bold">Payment Details</h2>
				<Button
					variant="outline"
					className="bg-white text-black border border-gray-300 rounded-full px-4 py-2"
					asChild>
					<Link
						href={`/${
							type === "client" ? "client-panel" : "ib-panel"
						}/accounts/add-payment`}>
						Add New Details
					</Link>
				</Button>
			</div>
			<div className="max-h-64 overflow-y-auto custom-scrollbar">
				<table className="w-full text-left">
					<tbody>
						{paymentData.map((payment, index) => (
							<tr
								key={index}
								className="border-b">
								<td className="py-4">{payment.method}</td>
								<td className="py-4">{payment.bank}</td>
								<td className="py-4">
									<span
										className={`px-3 py-2 rounded-lg text-sm font-semibold ${
											payment.status === "Approved"
												? "bg-green-100 text-green-600"
												: "bg-red-100 text-red-600"
										}`}>
										{payment.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* {visiblePayments < paymentData.length && (
				<div className="mt-4 text-center">
					<Button
						className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2"
						onClick={() => setVisiblePayments(visiblePayments + 3)}>
						Load More
					</Button>
				</div>
			)} */}
			</div>
		</div>
	);
};

export default PaymentDetails;
