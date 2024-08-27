"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/icons/login-1.png", "/icons/login-3.png"];

const AuthPhoto = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-full">
			<AnimatePresence>
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, x: 0 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 0 }}
					transition={{ duration: 0.5, ease: "easeIn" }}
					className="absolute top-0 left-0 w-full h-full">
					<Image
						src={images[currentIndex]}
						alt="Auth Image"
						fill
						className="object-cover"
						priority
					/>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default AuthPhoto;
