"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
	DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { merchandiseItems } from "@/lib/data"; // Data produk
import { useCart } from "@/contexts/CartContext";

const ProductDetail = ({ id }: { id: number }) => {
	const router = useRouter();
	const product = merchandiseItems.find((item) => item.id === id);

	const [selectedImage, setSelectedImage] = useState(
		product ? product.image : "/default-placeholder.png",
	);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { addToCart } = useCart();

	if (!product) {
		return <div>Product not found.</div>;
	}

	const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

	const handlePlaceOrder = () => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			points: 50,
			size: selectedSize || "Not selected",
			quantity: 1,
			image: product.image,
		});
		setIsModalOpen(false);
		alert("Order placed successfully!");
	};

	return (
		<>
			<div className="flex flex-col lg:flex-row items-start gap-8 p-6 lg:p-12 bg-gray-50 rounded-lg shadow-md">
				{/* Image Gallery */}
				<div className="flex flex-col items-center lg:w-1/2">
					<div className="w-full lg:w-96 h-80 bg-gray-100 rounded-lg overflow-hidden relative">
						<Image
							src={selectedImage}
							alt={product.name}
							fill
							className="object-contain"
						/>
					</div>
					<div className="flex gap-4 mt-4">
						{Array(3)
							.fill(product.image)
							.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(image)}
									className={`w-20 h-20 rounded-lg overflow-hidden border ${
										selectedImage === image
											? "border-black"
											: "border-transparent"
									}`}>
									<Image
										src={image}
										alt={`Thumbnail ${index + 1}`}
										width={80}
										height={80}
										className="object-cover"
									/>
								</button>
							))}
					</div>
				</div>

				{/* Product Details */}
				<div className="flex-1">
					<h1 className="text-2xl lg:text-3xl font-semibold">{product.name}</h1>
					<div className="flex items-center gap-2 mt-2">
						<div className="flex text-yellow-500">
							{Array(product.rating)
								.fill(0)
								.map((_, i) => (
									<span key={i}>★</span>
								))}
						</div>
						<p className="text-gray-500 text-sm">
							({product.rating.toFixed(1)})
						</p>
					</div>
					<p className="mt-2 text-lg lg:text-xl font-bold">{product.price}</p>
					<p className="mt-4 text-gray-700">
						Introducing the {product.name}: a blend of comfort and style
						designed for traders with a passion for both fashion and finance.
					</p>
					<div className="mt-4 text-sm text-gray-500">
						<p>
							<strong>Materials:</strong> Cotton
						</p>
						<p>
							<strong>Product SKU:</strong> {product.sku}
						</p>
					</div>

					{/* Size Selector */}
					<div className="mt-6">
						<h3 className="text-gray-700 text-sm font-semibold mb-2">
							Select Size
						</h3>
						<div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
							{sizes.map((size) => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`px-4 py-2 border rounded-lg text-sm ${
										selectedSize === size
											? "bg-black text-white"
											: "border-gray-300 text-gray-700"
									}`}>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Button
							className="flex-1 bg-black text-white py-3"
							disabled={!selectedSize}
							onClick={() => setIsModalOpen(true)}>
							GET THIS
						</Button>
						<Button
							onClick={() => router.back()}
							className="flex-1 border border-black text-black py-3"
							variant="outline">
							BACK
						</Button>
					</div>
				</div>
			</div>

			{/* Modal */}
			<Dialog
				open={isModalOpen}
				onOpenChange={setIsModalOpen}>
				<DialogContent className="max-w-xl">
					<div className="flex items-center gap-4">
						<div className="w-56 h-56 bg-gray-100 rounded-lg overflow-hidden relative">
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="object-contain"
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<h2 className="text-lg font-semibold text-gray-800">
								{product.name}
							</h2>
							<p className="text-sm text-gray-500">
								<strong>SKU :</strong> {product.sku}
							</p>
							<p className="text-sm text-gray-500">
								<strong>Size :</strong> {selectedSize || "Not selected"}
							</p>
							<p className="text-xl font-bold text-gray-800">{product.price}</p>
						</div>
					</div>
					<div className="mt-6 space-y-6">
						{/* Option 1: Redeem using points */}
						<div className="flex items-center space-x-4">
							<Switch />
							<div>
								<p className="text-gray-800">
									I want to redeem this merchandise using my{" "}
									<strong>points</strong>
								</p>
								<p className="text-sm text-gray-500">
									(My Current Points: <strong>350 pts</strong>)
								</p>
							</div>
						</div>

						{/* Option 2: Redeem using lots */}
						<div className="flex items-center space-x-4 opacity-50">
							<Switch />
							<div>
								<p className="text-gray-400">
									I want to redeem this merchandise using my{" "}
									<strong>lots</strong>
								</p>
								<p className="text-sm text-gray-400">
									(My Current Lots: <strong>310 LOTS</strong>)
								</p>
							</div>
						</div>
					</div>
					<DialogFooter>
						<Button
							size={"lg"}
							className="w-full bg-black text-white py-3"
							onClick={handlePlaceOrder}>
							PLACE ORDER
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ProductDetail;
