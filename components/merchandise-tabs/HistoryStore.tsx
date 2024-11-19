import Image from "next/image";

const HistoryStore = () => {
	const purchaseHistory = [
		{
			id: 1,
			name: "Vestrado Cypher Baseball Cap",
			orderId: "#823771",
			createdAt: "10-10-2022 15:58",
			size: "N/A",
			paidWith: "350 Pts",
			status: "Success",
			image: "/store/cap.png",
		},
		{
			id: 2,
			name: "Vestrado Campus Tees",
			orderId: "#823771",
			createdAt: "10-10-2022 15:58",
			size: "M",
			paidWith: "350 Pts",
			status: "Success",
			image: "/store/shirt.png",
		},
		{
			id: 3,
			name: "Vestrado Paragons Tote Bag",
			orderId: "#823771",
			createdAt: "10-10-2022 15:58",
			size: "M",
			paidWith: "350 Pts",
			status: "Declined",
			image: "/store/bag.png",
		},
	];

	return (
		<div className="space-y-6">
			{purchaseHistory.map((item) => (
				<div
					key={item.id}
					className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
					<div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40">
						<Image
							src={item.image}
							alt={item.name}
							width={160}
							height={160}
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
							{item.name}
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
							<p>
								<span className="font-semibold">Size:</span> {item.size}
							</p>
							<p>
								<span className="font-semibold">Created At:</span>{" "}
								{item.createdAt}
							</p>
							<p>
								<span className="font-semibold">Order ID:</span> {item.orderId}
							</p>
							<p>
								<span className="font-semibold">Paid With:</span>{" "}
								{item.paidWith}
							</p>
							<div className="col-span-1 sm:col-span-2">
								<span className="font-semibold">Status:</span>{" "}
								<span
									className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
										item.status === "Success"
											? "bg-green-100 text-green-600"
											: "bg-red-100 text-red-600"
									}`}>
									{item.status}
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HistoryStore;
