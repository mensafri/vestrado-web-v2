import { Loader } from "lucide-react"; // You can use any spinner icon here

export default function CustomLoading() {
	return (
		<div className="flex items-center justify-center h-full">
			<Loader
				className="animate-spin text-gray-500"
				size={48}
			/>
			<p className="ml-4 text-gray-500">Loading...</p>
		</div>
	);
}
