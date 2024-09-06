"use client";

import { Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CopyTrading = () => {
	const traders = [
		{
			name: "Raheem Rod",
			gain: 50.88,
			copiers: 129,
			since: "2012",
			profilePicture: "/images/raheem.png", // Image path
			progressBarColor: "bg-[#0FF225]",
			progressBars: 50, // Total number of bars for the gain progress
		},
		{
			name: "Katrina Ashe",
			gain: 73.22,
			copiers: 312,
			since: "2012",
			profilePicture: "/images/katrina.png", // Image path
			progressBarColor: "bg-[#0FF225]",
			progressBars: 73, // Total number of bars for the gain progress
		},
	];

	const [isHovered, setIsHovered] = useState<number | null>(null);

	return (
		<div className="flex flex-col justify-between items-center w-full">
			<div className="w-full flex justify-between items-center px-6">
				<h2 className="text-lg font-bold">Vestrado’s Copy Trading</h2>
				<Link
					href="/client-panel/copytrading"
					className="flex items-center bg-white text-gray-3 rounded-full px-6 py-2 border font-medium text-sm">
					View All
					<svg
						className="w-4 h-4 ml-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"></path>
					</svg>
				</Link>
			</div>

			<div className="flex space-x-2 mt-4">
				{traders.map((trader, index) => (
					<div
						key={index}
						className="p-6 rounded-3xl w-[26rem] transition-all duration-1000 bg-white hover:bg-gradient-to-t hover:from-[#171821] hover:to-[#0FE00B]"
						onMouseEnter={() => setIsHovered(index)}
						onMouseLeave={() => setIsHovered(null)}>
						<div className="flex justify-between items-center">
							<div className="flex items-center">
								<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
									<Image
										src={trader.profilePicture}
										fill
										alt={`${trader.name} profile`}
										className="object-cover"
									/>
								</div>
								<div
									className={`${
										isHovered === index ? "text-white" : "text-gray-3"
									}`}>
									<h3 className="font-bold text-lg">{trader.name}</h3>
									<div className="flex gap-3">
										<div
											className={`text-xs py-1 px-3 flex items-center gap-1 rounded-full ${
												isHovered === index
													? "text-sky-8 bg-gray-5"
													: "text-gray-6 bg-sky-9"
											}`}>
											<Sparkle size={15} /> {trader.copiers} Copiers
										</div>
										<div
											className={`text-xs py-1 px-3 flex items-center rounded-full ${
												isHovered === index
													? "text-sky-8 bg-gray-5"
													: "text-gray-6 bg-sky-9"
											}`}>
											Since {trader.since}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Gain and Progress Bars */}
						<div className="mt-16 flex items-center justify-between">
							{/* Progress Bars with steps */}
							<div>
								<div className="flex items-center justify-between">
									<p
										className={`text-xs ${
											isHovered === index ? "text-[#0FF225]" : "text-gray-6"
										}`}>
										0
									</p>
									<p
										className={`text-xs ${
											isHovered === index ? "text-[#0FF225]" : "text-gray-6"
										}`}>
										50
									</p>
									<p
										className={`text-xs ${
											isHovered === index ? "text-[#0FF225]" : "text-gray-6"
										}`}>
										100
									</p>
								</div>
								<div className="mt-2 flex space-x-1">
									{[...Array(20)].map((_, i) => {
										let barColor;

										// Determine the bar color based on its index and hover state
										if (i < trader.progressBars / 5) {
											barColor = trader.progressBarColor; // Active progress bars
										} else if (isHovered === index) {
											barColor = "bg-[#535353]"; // Hover state
										} else {
											barColor = "bg-[#E9F5ED]"; // Default background color for inactive bars
										}

										// Return the individual progress bar
										return (
											<div
												key={i}
												className={`w-2 h-14 rounded-full ${barColor}`}></div>
										);
									})}
								</div>
							</div>
							<div className="flex items-center justify-between flex-col">
								<p
									className={`text-2xl font-bold ${
										isHovered === index ? "text-[#08EC47]" : "text-[#504F4F]"
									}`}>
									{trader.gain}%
								</p>
								<p
									className={`text-sm text-gray-500 ${
										isHovered === index ? "text-white" : "text-[#727272]"
									}`}>
									Gain (Win)
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CopyTrading;
