import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllMerchandise from "./AllMerchandise";
import HistoryStore from "./HistoryStore";
import MerchandiseCart from "./MerchandiseCart";

export default function MerchandiseTabs() {
	return (
		<div className="p-6">
			<Tabs defaultValue="all">
				<TabsList>
					<TabsTrigger value="all">All Merchandising</TabsTrigger>
					<TabsTrigger value="history">Purchase History</TabsTrigger>
					<TabsTrigger value="cart">Shopping Cart</TabsTrigger>
				</TabsList>

				{/* All Merchandising */}
				<TabsContent value="all">
					<AllMerchandise />
				</TabsContent>

				{/* Purchase History */}
				<TabsContent value="history">
					<HistoryStore />
				</TabsContent>

				{/* Shopping Cart */}
				<TabsContent value="cart">
					<MerchandiseCart />
				</TabsContent>
			</Tabs>
		</div>
	);
}
