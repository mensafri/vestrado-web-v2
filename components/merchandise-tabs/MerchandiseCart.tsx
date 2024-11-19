"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const MerchandiseCart = () => {
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			name: "Cypher Baseball Cap",
			price: 330,
			points: 200,
			size: "S",
			quantity: 1,
			image: "/store/cap.png",
		},
	]);

	// Handle item removal
	const handleRemoveItem = (id: number) => {
		if (confirm("Are you sure you want to delete this item?")) {
			setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
		}
	};

	// Handle size or quantity change
	const handleUpdateItem = (
		id: number,
		key: string,
		value: string | number,
	) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, [key]: value } : item,
			),
		);
	};

	// Calculate totals dynamically
	const subtotalPoints = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);
	const subtotalLots = cartItems.reduce(
		(total, item) => total + item.points * item.quantity,
		0,
	);
	const deliveryFee = 0; // Static for now

	return (
		<div className="space-y-8">
			{/* Cart Summary */}
			<div className="bg-white p-6 rounded-2xl shadow-md">
				<h3 className="font-semibold text-lg mb-4">Cart Summary</h3>
				<div className="flex justify-between items-center border-b pb-4 mb-4">
					<div>
						<p className="text-gray-500">Subtotal</p>
						<p className="text-gray-500">Delivery Fee</p>
					</div>
					<div className="text-right">
						<p className="font-semibold">
							{subtotalPoints}PTS/{subtotalLots}LOTS
						</p>
						<p className="font-semibold">
							{deliveryFee > 0 ? `${deliveryFee} PTS` : "Free"}
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<h4 className="text-lg font-bold">Total</h4>
					<p className="text-lg font-bold">
						{subtotalPoints}PTS/{subtotalLots}LOTS
					</p>
				</div>
				<div className="flex space-x-2 mt-4">
					<Button
						className="w-full bg-black text-white rounded-lg py-2"
						variant="default">
						CHECKOUT ({subtotalPoints}PTS)
					</Button>
					<Button
						className="w-full border border-black text-black rounded-lg py-2"
						variant="outline">
						CHECKOUT ({subtotalLots}LOTS)
					</Button>
				</div>
			</div>

			{/* Cart Items */}
			<div className="space-y-6">
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="bg-white p-6 rounded-2xl shadow-md flex flex-wrap md:flex-nowrap space-x-6 items-center">
						{/* Image */}
						<div className="w-24 h-24 rounded-lg overflow-hidden">
							<Image
								src={item.image}
								alt={item.name}
								width={96}
								height={96}
								className="object-cover"
							/>
						</div>

						{/* Item Details */}
						<div className="flex-1">
							<h3 className="text-lg font-semibold">{item.name}</h3>
							<p className="text-gray-500 mt-1">
								{item.price}PTS/{item.points}LOTS
							</p>
							<div className="mt-4 grid grid-cols-2 gap-6">
								{/* Size Selector */}
								<div>
									<label className="text-sm text-gray-500">Size</label>
									<select
										className="w-full border border-gray-300 rounded-lg p-2 mt-1"
										value={item.size}
										onChange={(e) =>
											handleUpdateItem(item.id, "size", e.target.value)
										}>
										<option value="S">S</option>
										<option value="M">M</option>
										<option value="L">L</option>
									</select>
								</div>
								{/* Quantity Selector */}
								<div>
									<label className="text-sm text-gray-500">Quantity</label>
									<select
										className="w-full border border-gray-300 rounded-lg p-2 mt-1"
										value={item.quantity}
										onChange={(e) =>
											handleUpdateItem(
												item.id,
												"quantity",
												Number(e.target.value),
											)
										}>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col space-y-2">
							<Button
								variant="outline"
								className="w-full">
								Make Favourite
							</Button>
							<Button
								variant="destructive"
								className="w-full"
								onClick={() => handleRemoveItem(item.id)}>
								Delete
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MerchandiseCart;
