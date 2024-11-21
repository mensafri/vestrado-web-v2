import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductComponent = (item: Merchandise) => {
	return (
		<Link
			href={`/client-panel/loyalty-store/${item.id}`}
			key={item.id}
			className="flex flex-col items-center bg-white shadow-md p-6 lg:p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
			{/* Gambar Merchandise */}
			<div className="relative flex justify-center items-center bg-gray-100 w-full h-80 lg:h-[24rem] rounded-xl">
				<Image
					src={item.image}
					alt={item.name}
					width={300}
					height={300}
					className="object-contain bg-transparent w-44 h-44 lg:w-64 lg:h-64 rounded-lg transform transition-transform duration-300 hover:scale-110"
				/>
			</div>
			{/* Nama Merchandise */}
			<div className="flex flex-col items-start space-y-2">
				<h3 className="text-lg lg:text-xl text-gray-800 font-semibold">
					{item.name}
				</h3>
				{/* Rating */}
				<div className="flex items-center space-x-1">
					<div className="flex text-green-500 text-lg lg:text-2xl">
						{Array(item.rating)
							.fill(0)
							.map((_, i) => (
								<span key={i}>★</span>
							))}
					</div>
				</div>
				{/* Harga */}
				<p className="text-lg lg:text-xl text-gray-800 font-bold">
					{item.price} LOTS / {item.points} PTS
				</p>
			</div>
		</Link>
	);
};

export default ProductComponent;
