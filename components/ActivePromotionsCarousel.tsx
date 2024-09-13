"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const promotions: Promotion[] = [
	{
		id: 1,
		imageSrc: "/promotions/1.png", // Replace with your image path
		title: "Vestrado Tech x Merch Deals",
		label: "Contest",
	},
	{
		id: 2,
		imageSrc: "/promotions/2.png", // Replace with your image path
		title: "20% Deposit Bonus",
		label: "Bonus",
	},
	{
		id: 3,
		imageSrc: "/promotions/1.png", // Example third promotion
		title: "Referral Program",
		label: "Referral",
	},
];

export default function ActivePromotionsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? promotions.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === promotions.length - 1 ? 0 : prevIndex + 1,
		);
	};

	// Tampilkan dua promosi sekaligus
	const visiblePromotions = promotions.slice(currentIndex, currentIndex + 2);

	return (
		<div className="relative w-full max-w-[900px] mx-auto">
			<div className="flex w-full justify-between items-center px-6 mb-4">
				<h2 className="text-xl font-bold">Active Promotions</h2>
				<div className="flex items-center space-x-2">
					<Button
						variant="ghost"
						onClick={handlePrevious}
						className="bg-white rounded-full">
						<ChevronLeft className="w-5 h-5 text-gray-500" />
					</Button>
					<span>
						Showing {Math.ceil((currentIndex + 1) / 2)} out of{" "}
						{Math.ceil(promotions.length / 2)}
					</span>
					<Button
						variant="ghost"
						onClick={handleNext}
						className="bg-white rounded-full">
						<ChevronRight className="w-5 h-5 text-gray-500" />
					</Button>
				</div>
			</div>

			<div className="relative flex justify-between space-x-4">
				{visiblePromotions.map((promotion) => (
					<div
						key={promotion.id}
						className="relative w-1/2 bg-white h-[28rem] rounded-3xl flex flex-col">
						{/* Bagian gambar - Menempati setengah bagian atas */}
						<div className="relative w-full h-64 rounded-xl overflow-hidden">
							<Image
								src={promotion.imageSrc}
								alt={promotion.title}
								className="object-cover w-full h-full rounded-t-xl" // Gambar memenuhi bagian atas dengan rasio yang tepat
								width={400}
								height={200}
							/>
						</div>
						{/* Bagian keterangan - Menempati setengah bagian bawah */}
						<div className="text-center flex-grow py-12 pl-6 flex flex-col justify-between">
							{/* Label - Tampilan sesuai gambar */}
							<span className="inline-block bg-gray-100 text-gray-500 font-semibold text-sm rounded-full w-32 px-4 py-1 mb-4">
								{promotion.label}
							</span>
							{/* Title - Lebih besar dan menonjol */}
							<h3 className="text-lg text-start font-bold text-black">
								{promotion.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
