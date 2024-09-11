"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
	ChevronDown,
	CircleFadingPlus,
	CircleMinus,
	CircleChevronRight,
} from "lucide-react";
import Image from "next/image";

const AccountDetails: React.FC = () => {
	const [selectedAccount, setSelectedAccount] = useState(
		"Local Depositor (27348)",
	);

	const accountOptions = [
		"Live Account (35281)",
		"Local Depositor (27348)",
		"Demo Account (27348)",
	];

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

	const getButtonStyle = () => {
		if (selectedAccount === "Demo Account (27348)") {
			return "flex items-center justify-center bg-black text-white px-6 py-3 rounded-full gap-2";
		} else {
			return "flex items-center justify-center bg-[#2D2D2D] text-white px-6 py-3 rounded-full gap-2";
		}
	};

	const getButtonClass = () => {
		if (selectedAccount === "Live Account (35281)") {
			return "bg-black text-white";
		} else if (selectedAccount === "Local Depositor (27348)") {
			return "bg-[#0A324E] text-white";
		} else {
			return "bg-[#EFEFEF] text-gray-700";
		}
	};

	return (
		<div
			className={`relative flex justify-between items-center p-8 ${getBackgroundColor()} rounded-xl w-full`}>
			{/* Background Image */}
			{selectedAccount !== "Demo Account (27348)" && (
				<Image
					src="/icons/Backpattern.png"
					alt="Background pattern"
					fill
					className="object-cover"
				/>
			)}

			{/* Balance Section */}
			<div className="relative z-10 flex flex-col space-y-20 justify-between">
				<span
					className={`text-${
						selectedAccount === "Demo Account (27348)" ? "gray-500" : "white"
					} text-sm`}>
					Available Balance
				</span>
				<span
					className={`text-${
						selectedAccount === "Demo Account (27348)" ? "gray-700" : "white"
					} text-5xl font-semibold mt-2`}>
					$192
				</span>
			</div>

			<div className="relative z-10 flex flex-col items-end space-y-20 justify-between">
				{/* Account Type Selector */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							className={`${getButtonClass()} px-4 py-2 rounded-full flex items-center`}>
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

				{/* Actions Section */}
				<div className="flex space-x-4">
					<Button
						variant="ghost"
						className={`flex items-center justify-center gap-2 ${
							selectedAccount === "Demo Account (27348)"
								? "bg-black text-white"
								: "bg-[#9CE25C] text-black"
						} px-6 py-3 rounded-full`}>
						<CircleFadingPlus />
						{selectedAccount === "Demo Account (27348)"
							? "Top Up Balance"
							: "Deposit"}
					</Button>
					{selectedAccount === "Demo Account (27348)" ? (
						<Button className="flex items-center justify-center bg-gray-100 text-black px-6 py-3 rounded-full gap-2">
							<CircleMinus />
							Change Leverage
						</Button>
					) : (
						<>
							<Button className={getButtonStyle()}>
								<CircleMinus />
								Withdraw
							</Button>
							<Button className={getButtonStyle()}>
								<CircleChevronRight />
								Transfer
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default AccountDetails;
