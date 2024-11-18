import Image from "next/image";
import Link from "next/link";

const LatestUpdates = ({ type }: { type: "ib" | "client" }) => {
	const updates = [
		{
			id: 1,
			title: "Vestrado proudly introducing new account: Cent Account",
			image: "/news/1.png",
			category: "Company News",
		},
		{
			id: 2,
			title: "Bill Gates and his amazing journey to global philanthropy",
			image: "/news/2.png",
			category: "Blog Post",
		},
		{
			id: 3,
			title: "Vestrado proudly introducing new account: Cent Account",
			image: "/news/1.png",
			category: "Company News",
		},
	];

	return (
		<div className="w-full">
			<div className="flex flex-wrap justify-between items-center mb-6 px-4 md:px-6">
				<h2 className="text-lg font-bold">Latest Updates</h2>
				<div className="flex space-x-2 items-center md:mt-0">
					<Link
						href={`/${type === "ib" ? "ib-panel" : "client-panel"}/promotions`}
						className="flex items-center bg-white text-gray-600 rounded-full px-4 md:px-6 py-2 border font-medium text-sm hover:shadow-lg transition-shadow">
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
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
				{updates.map((update) => (
					<div
						key={update.id}
						className="rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
							<h3 className="mt-4 text-md font-semibold hover:text-blue-500 transition-colors">
								{update.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestUpdates;
