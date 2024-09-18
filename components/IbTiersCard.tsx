"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { PieChart, Pie } from "recharts";

export function IbTiersCard() {
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
		new Date(),
	);
	const totalClients = 100; // Asumsikan total target client
	const currentClients = 65; // Jumlah klien saat ini (diubah sesuai kebutuhan)
	const completedPercentage = (currentClients / totalClients) * 100;
	const remainingPercentage = 100 - completedPercentage;

	const chartData = [
		{ name: "Completed", value: completedPercentage, fill: "#00D915" },
		{
			name: "Remaining",
			value: remainingPercentage,
			fill: "#E8F2E8",
		},
	];

	return (
		<Card className="w-full sm:w-[26rem] border-0 rounded-3xl p-2 shadow-none">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-gray-7">
					IB Tiers
				</CardTitle>
				<span className="text-4xl font-semibold text-gray-7">Level 1</span>
			</CardHeader>
			<CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center">
				<div className="text-center sm:text-left">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-full sm:w-auto justify-start text-left font-normal",
									!selectedDate && "text-muted-foreground",
								)}>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{selectedDate ? (
									format(selectedDate, "MMMM yyyy")
								) : (
									<span>Pick a date</span>
								)}
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
				<div className="relative w-[8rem] h-[8rem] flex items-center justify-center">
					<PieChart
						width={130}
						height={130}>
						<Pie
							data={chartData}
							dataKey="value"
							nameKey="name"
							innerRadius="70%"
							outerRadius="100%"
							startAngle={90} // Memulai dari arah kanan
							endAngle={540} // Mengubah arah ke kiri
							strokeWidth={0}
						/>
					</PieChart>

					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex items-center flex-col">
							<span className="text-base font-semibold text-gray-7">
								{currentClients}
							</span>
							<span className="text-sm font-semibold text-gray-7">Clients</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
