import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const BdManager = () => {
	return (
		<div className="w-full bg-white rounded-3xl p-6 text-center">
			<h2 className="text-lg font-bold mb-6">My Account Manager</h2>

			<div className="relative mx-auto w-[150px] h-[150px] mb-4">
				{/* Profile Image */}
				<Image
					src="/images/bd-manager.png" // You should replace this with the correct path
					alt="Hafiz Jaidornim"
					fill
					className="object-cover rounded-full border-4 border-green-500"
				/>
			</div>

			{/* Account Manager Name & Email */}
			<h3 className="text-lg font-bold">Hafiz Jaidornim</h3>
			<p className="text-gray-500">hafiz@vestrado.com</p>

			{/* Contact Icons */}
			<div className="flex justify-center gap-4 mt-6">
				<Button
					variant="ghost"
					className="bg-gray-100 rounded-full p-3">
					<Phone className="w-5 h-5 text-gray-600" />
				</Button>
				<Button
					variant="ghost"
					className="bg-gray-100 rounded-full p-3">
					<MessageCircle className="w-5 h-5 text-gray-600" />
				</Button>
				<Button
					variant="ghost"
					className="bg-gray-100 rounded-full p-3">
					<Mail className="w-5 h-5 text-gray-600" />
				</Button>
			</div>
		</div>
	);
};

export default BdManager;
