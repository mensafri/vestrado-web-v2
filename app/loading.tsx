"use client";

import React from "react";
import Image from "next/image"; // or your preferred image component
import styles from "./loading.module.css";

const LoadingComponent = () => {
	return (
		<div className="relative flex justify-center items-center h-screen">
			{/* Background line */}
			<div className="absolute h-1 bg-gray-400 w-3/4 top-1/2 transform -translate-y-1/2">
				{/* Green progress line */}
				<div
					className={`${styles.progressLine} h-1 bg-green-500 absolute left-0 top-0`}></div>
			</div>
			{/* Moving image */}
			<div
				className={`${styles.movingImage} absolute left-40 top-1/2 transform -translate-y-1/2`}>
				<Image
					src="/icons/loading_logo.png"
					alt="Loading"
					width={50}
					height={50}
				/>
			</div>
		</div>
	);
};

export default LoadingComponent;
