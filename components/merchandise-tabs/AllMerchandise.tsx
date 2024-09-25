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
		<div className="grid grid-cols-2 gap-4">
			{merchandiseItems.map((item) => (
				<div
					key={item.id}
					className="flex flex-col">
					<div className="relative flex justify-center items-center bg-gray-10 w-80 h-80 rounded-2xl">
						{/* Apply hover effect and transition */}
						<Image
							src={item.image}
							alt={item.name}
							width={100}
							height={100}
							className="object-contain w-60 h-60 rounded-lg transform transition-transform duration-300 hover:scale-125"
						/>
					</div>
					<h3 className="mt-4 text-lg text-gray-11">{item.name}</h3>
					<div className="flex items-center mt-2">
						{/* Rating */}
						<div className="flex text-green-500 text-xl font-bold">
							{Array(item.rating)
								.fill(0)
								.map((_, i) => (
									<span key={i}>★</span>
								))}
						</div>
					</div>
					<p className="text-gray-11 mt-2 font-semibold">{item.price}</p>
				</div>
			))}
		</div>
	);
};

export default AllMerchandise;
