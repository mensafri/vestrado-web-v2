import { merchandiseItems } from "@/lib/data";
import ProductComponent from "../ProductComponent";

const AllMerchandise = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
			{merchandiseItems.map((item) => (
				<ProductComponent
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
};

export default AllMerchandise;
