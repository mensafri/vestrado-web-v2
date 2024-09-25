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
		<div className="space-y-4">
			{purchaseHistory.map((item) => (
				<div
					key={item.id}
					className="bg-white p-10 rounded-xl flex items-center space-x-6">
					<div className="flex-shrink-0">
						<Image
							src={item.image}
							alt={item.name}
							width={150}
							height={150}
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold mb-2">{item.name}</h3>
						<div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
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
							<p className="col-span-2">
								<span className="font-semibold">Status:</span>{" "}
								<span
									className={`font-bold ${
										item.status == "Success" ? "text-green-500" : "text-red-500"
									}`}>
									{item.status}
								</span>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HistoryStore;
