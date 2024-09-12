"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// AccountDetailsMini component
const AccountDetailsMini: React.FC = () => {
	const [selectedAccount, setSelectedAccount] = useState(
		"Live Account (35281)",
	);

	const accountOptions = [
		"Live Account (35281)",
		"Local Depositor (27348)",
		"Demo Account (27348)",
	];

	// Function to determine background based on the selected account
	const getBackgroundColor = () => {
		switch (selectedAccount) {
			case "Live Account (35281)":
				return "bg-gradient-to-b from-[#000000] to-[#1B1B1B]";
			case "Demo Account (27348)":
				return "bg-white";
			default:
				return "bg-gradient-to-b from-[#021A49] to-[#03022E]";
		}
	};

	// Function to determine the text color based on the selected account
	const getTextColor = () => {
		return selectedAccount === "Demo Account (27348)"
			? "text-black"
			: "text-white";
	};

	// Function to determine button styles based on the selected account
	const getButtonStyles = () => {
		switch (selectedAccount) {
			case "Live Account (35281)":
				return "bg-black text-white";
			case "Local Depositor (27348)":
				return "bg-[#0A324E] text-white";
			default:
				return "bg-[#EFEFEF] text-gray-700";
		}
	};

	return (
		<div
			className={`relative flex flex-col p-8 ${getBackgroundColor()} rounded-2xl w-full`}>
			{/* Background Image */}
			{selectedAccount !== "Demo Account (27348)" && (
				<Image
					src="/icons/Backpattern.png"
					alt="Background pattern"
					fill
				/>
			)}

			<div className="relative z-10 w-full">
				{/* Account Type Selector */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							className={`${getButtonStyles()} px-4 py-2 rounded-full flex items-center justify-between`}>
							{selectedAccount}
							<ChevronDown className="w-4 h-4 ml-2" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{accountOptions.map((option, index) => (
							<DropdownMenuItem
								key={index}
								onClick={() => setSelectedAccount(option)}
								className="cursor-pointer">
								{option}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Balance Section */}
			<div className="relative z-10 flex flex-col mt-4">
				<span
					className={`${
						selectedAccount === "Demo Account (27348)"
							? "text-gray-500"
							: "text-white"
					} text-sm`}>
					Balance
				</span>
				<span className={`mt-2 ${getTextColor()} text-5xl font-semibold`}>
					{selectedAccount === "Local Depositor (27348)"
						? "$192.00"
						: "$2,882.78"}
				</span>
			</div>
		</div>
	);
};

export default AccountDetailsMini;
