import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const LatestUpdates = () => {
	const updates = [
		{
			id: 1,
			title: "Vestrado proudly introducing new account: Cent Account",
			image: "/news/1.png", // Replace with the actual image path
			category: "Company News",
		},
		{
			id: 2,
			title: "Bill Gates and his amazing journey to global philanthropy",
			image: "/news/2.png", // Replace with the actual image path
			category: "Blog Post",
		},
	];

	return (
		<div className="w-full p-6">
			<div className="flex justify-between items-center mb-6 px-2">
				<h2 className="text-lg font-bold">Latest Updates from Vestrado</h2>
				<div className="flex space-x-2 items-center">
					<Link
						href="/client-panel/promotions"
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
					{/* <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
						<ChevronLeft className="w-4 h-4 text-gray-500" />
					</button>
					<button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
						<ChevronRight className="w-4 h-4 text-gray-500" />
					</button> */}
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{updates.map((update) => (
					<div
						key={update.id}
						className="rounded-2xl bg-white overflow-hidden">
						<div className="relative w-full h-60">
							<Image
								src={update.image}
								alt={update.title}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-6">
							<span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
								{update.category}
							</span>
							<h3 className="mt-4 text-md font-semibold">{update.title}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestUpdates;
