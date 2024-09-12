"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

const TopInstruments = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date(),
	);

	const instruments = [
		{
			symbol: "BTCUSD",
			icon: "/icons/btc.png",
			percentage: 55,
			color: "bg-gradient-to-r from-lime-400 to-green-500",
		},
		{
			symbol: "DJCUSD.V",
			icon: "/icons/doge.png",
			percentage: 35,
			color: "bg-gradient-to-r from-teal-400 to-teal-500",
		},
		{
			symbol: "EOSUSD",
			icon: "/icons/eos.png",
			percentage: 22,
			color: "bg-gradient-to-r from-yellow-400 to-yellow-500",
		},
	];

	return (
		<div className="rounded-3xl p-8 w-full bg-white">
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-bold text-lg">My Top Instruments</h2>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center">
							<CalendarIcon className="w-4 h-4 mr-2" />
							{selectedDate ? format(selectedDate, "MMMM yyyy") : "Select Date"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={selectedDate}
							onSelect={setSelectedDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>

			{instruments.map((instrument, index) => (
				<div
					key={index}
					className="flex items-center justify-center gap-4 mb-6">
					<Image
						src={instrument.icon}
						alt={instrument.symbol}
						className="w-10 h-10"
						width={240}
						height={240}
					/>
					<div className="flex flex-col w-full">
						<div className="flex items-center justify-between">
							<p className="font-medium">{instrument.symbol}</p>
							<p className="font-semibold">{instrument.percentage}%</p>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
							<div
								className={`h-2 rounded-full ${instrument.color}`}
								style={{ width: `${instrument.percentage}%` }}></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TopInstruments;
