import Image from "next/image";

const AllMerchandise = () => {
	const merchandiseItems = [
		{
			id: 1,
			name: "Vestrado Campus Hoodie",
			image: "/store/jacket.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 2,
			name: "Vestrado Cypher Sweat Shirt",
			image: "/store/sweater.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 3,
			name: "Vestrado Campus Tees",
			image: "/store/shirt.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 4,
			name: "Vestrado's Bucket Hat",
			image: "/store/hat.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 5,
			name: "Vestrado Campus Tees",
			image: "/store/bottle.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 6,
			name: "Vestrado Campus Tees",
			image: "/store/shirt-2.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 7,
			name: "Vestrado's Paragons Totebag",
			image: "/store/bag.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
		{
			id: 8,
			name: "Vestrado's Trading Plan",
			image: "/store/book.png",
			rating: 5,
			price: "50LOTS / 370PTS",
		},
	];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			{merchandiseItems.map((item) => (
				<div
					key={item.id}
					className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
					{/* Gambar Merchandise */}
					<div className="relative flex justify-center items-center bg-gray-100 w-full h-64 rounded-xl">
						<Image
							src={item.image}
							alt={item.name}
							width={150}
							height={150}
							className="object-contain w-44 h-44 rounded-lg transform transition-transform duration-300 hover:scale-110"
						/>
					</div>
					{/* Nama Merchandise */}
					<h3 className="mt-4 text-center text-lg font-semibold text-gray-800">
						{item.name}
					</h3>
					{/* Rating */}
					<div className="flex items-center mt-2">
						<div className="flex text-yellow-500 text-base">
							{Array(item.rating)
								.fill(0)
								.map((_, i) => (
									<span key={i}>★</span>
								))}
						</div>
					</div>
					{/* Harga */}
					<p className="text-center text-gray-600 mt-2 font-medium">
						{item.price}
					</p>
				</div>
			))}
		</div>
	);
};

export default AllMerchandise;
