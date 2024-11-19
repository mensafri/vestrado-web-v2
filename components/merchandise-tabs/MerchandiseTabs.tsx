import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllMerchandise from "./AllMerchandise";
import HistoryStore from "./HistoryStore";
import MerchandiseCart from "./MerchandiseCart";

export default function MerchandiseTabs() {
	return (
		<div className="p-4 md:p-6">
			<Tabs
				defaultValue="all"
				className="space-y-4">
				{/* Tabs Navigation */}
				<TabsList className="flex justify-between border-b border-gray-300">
					<TabsTrigger
						value="all"
						className="py-2 px-4 font-semibold text-gray-700 border-b-2 border-transparent focus:border-sky-500 focus:text-sky-500">
						All Merchandising
					</TabsTrigger>
					<TabsTrigger
						value="history"
						className="py-2 px-4 font-semibold text-gray-700 border-b-2 border-transparent focus:border-sky-500 focus:text-sky-500">
						Purchase History
					</TabsTrigger>
					<TabsTrigger
						value="cart"
						className="py-2 px-4 font-semibold text-gray-700 border-b-2 border-transparent focus:border-sky-500 focus:text-sky-500">
						Shopping Cart
					</TabsTrigger>
				</TabsList>

				{/* All Merchandising */}
				<TabsContent
					value="all"
					className="pt-4 animate-fade-in">
					<AllMerchandise />
				</TabsContent>

				{/* Purchase History */}
				<TabsContent
					value="history"
					className="pt-4 animate-fade-in">
					<HistoryStore />
				</TabsContent>

				{/* Shopping Cart */}
				<TabsContent
					value="cart"
					className="pt-4 animate-fade-in">
					<MerchandiseCart />
				</TabsContent>
			</Tabs>
		</div>
	);
}
