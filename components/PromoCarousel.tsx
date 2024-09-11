"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const promoImages = [
	"/promotions/promo1.png",
	"/promotions/promo2.png",
	"/promotions/promo3.png",
];

const PromoCarousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
		}, 3000); // Change every 3 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-[25rem] overflow-hidden rounded-xl">
			{promoImages.map((src, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}>
					<Image
						src={src}
						alt={`Promo ${index + 1}`}
						fill
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default PromoCarousel;
