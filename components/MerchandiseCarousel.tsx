"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { merchandiseItems } from "@/lib/data";
import ProductComponent from "./ProductComponent";

export default function MerchandiseCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? merchandiseItems.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === merchandiseItems.length - 1 ? 0 : prevIndex + 1,
		);
	};

	// Tentukan jumlah promosi yang terlihat berdasarkan ukuran layar
	const itemsToShow = 2; // Default: Tampilkan dua promosi

	// Tampilkan promosi yang sesuai dengan index saat ini
	const visibleMerchandise = merchandiseItems.slice(
		currentIndex,
		currentIndex + itemsToShow,
	);

	return (
		<div className="relative w-full max-w-[900px] mx-auto">
			{/* Header Carousel */}
			<div className="flex w-full justify-between items-center px-6 mb-4">
				<h2 className="text-xl font-bold">You May Also Like</h2>
				<div className="flex items-center space-x-2">
					<Button
						variant="ghost"
						onClick={handlePrevious}
						className="bg-white rounded-full">
						<ChevronLeft className="w-5 h-5 text-gray-500" />
					</Button>
					<span className="hidden md:flex">
						{Math.ceil((currentIndex + 1) / itemsToShow)} of{" "}
						{Math.ceil(merchandiseItems.length / itemsToShow)}
					</span>
					<Button
						variant="ghost"
						onClick={handleNext}
						className="bg-white rounded-full">
						<ChevronRight className="w-5 h-5 text-gray-500" />
					</Button>
				</div>
			</div>

			{/* Promosi */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{visibleMerchandise.map((item) => (
					<ProductComponent
						key={item.id}
						{...item}
					/>
				))}
			</div>

			{/* Indikator posisi */}
			<div className="flex justify-center mt-4 space-x-2">
				{merchandiseItems.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-blue-500" : "bg-gray-300"
						}`}></div>
				))}
			</div>
		</div>
	);
}
