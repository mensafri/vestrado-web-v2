"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const promotions = [
	{
		id: 1,
		imageSrc: "/tour/1.png",
		title: "Forex Trading Mastery: Essential Technical Analysis Techniques",
		label: "Class",
	},
	{
		id: 2,
		imageSrc: "/tour/2.png",
		title: "5 Minutes Scalping Technique By Hanzo Dark Web",
		label: "Road Tour",
	},
	{
		id: 3,
		imageSrc: "/tour/1.png",
		title: "Forex Trading Mastery: Essential Technical Analysis Techniques",
		label: "Class",
	},
];

export default function TourSeminarCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(1);

	// Mengupdate jumlah item berdasarkan lebar layar
	useEffect(() => {
		const updateItemsToShow = () => {
			setItemsToShow(window.innerWidth >= 768 ? 2 : 1);
		};

		// Jalankan fungsi saat komponen di-mount
		updateItemsToShow();

		// Dengarkan perubahan ukuran layar
		window.addEventListener("resize", updateItemsToShow);

		// Hapus event listener saat komponen di-unmount
		return () => window.removeEventListener("resize", updateItemsToShow);
	}, []);

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

	// Tampilkan promosi sesuai dengan index dan jumlah item yang ingin ditampilkan
	const visiblePromotions = promotions.slice(
		currentIndex,
		currentIndex + itemsToShow,
	);

	return (
		<div className="relative w-full max-w-6xl mx-auto">
			{/* Header Carousel */}
			<div className="flex justify-between items-center px-6 mb-4">
				<h2 className="text-xl font-bold">Road Tour and Seminars</h2>
				<div className="flex items-center space-x-2">
					<Button
						variant="ghost"
						onClick={handlePrevious}
						className="bg-white rounded-full">
						<ChevronLeft className="w-5 h-5 text-gray-500" />
					</Button>
					<span className="hidden md:flex">
						{Math.ceil((currentIndex + 1) / itemsToShow)} of{" "}
						{Math.ceil(promotions.length / itemsToShow)}
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
				{visiblePromotions.map((promotion) => (
					<div
						key={promotion.id}
						className="relative bg-white rounded-3xl flex flex-col shadow-lg hover:shadow-xl transition-shadow">
						{/* Bagian gambar */}
						<div className="relative w-full h-64 rounded-t-3xl overflow-hidden">
							<Image
								src={promotion.imageSrc}
								alt={promotion.title}
								className="object-cover w-full h-full"
								width={400}
								height={200}
							/>
						</div>
						{/* Bagian deskripsi */}
						<div className="flex flex-col flex-grow py-6 px-4">
							<span className="inline-block bg-gray-100 text-gray-500 font-semibold text-sm rounded-full w-32 px-4 py-1 mb-4">
								{promotion.label}
							</span>
							<h3 className="text-lg font-bold text-black">
								{promotion.title}
							</h3>
						</div>
					</div>
				))}
			</div>

			{/* Indikator posisi */}
			<div className="flex justify-center mt-4 space-x-2">
				{promotions.map((_, index) => (
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
