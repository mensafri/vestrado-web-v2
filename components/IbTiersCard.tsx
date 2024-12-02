"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function IbTiersCard() {
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
		new Date(),
	);
	const totalClients = 100; // Total target clients
	const currentClients = 65; // Current number of clients
	const completedPercentage = (currentClients / totalClients) * 100;
	const remainingPercentage = 100 - completedPercentage;

	const chartData = [
		{ name: "Completed", value: completedPercentage, fill: "#00D915" },
		{ name: "Remaining", value: remainingPercentage, fill: "#E8F2E8" },
	];

	return (
		<Card className="w-full sm:w-[26rem] border-0 rounded-3xl p-4 shadow-md">
			<CardHeader className="flex flex-col items-center sm:items-start">
				<CardTitle className="text-lg font-semibold text-gray-800">
					IB Tiers
				</CardTitle>
				<span className="text-4xl font-semibold text-gray-800">Level 1</span>
			</CardHeader>
			<CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
				<div className="w-full sm:w-auto text-center sm:text-left">
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
							startAngle={90} // Start from right
							endAngle={450} // Circular clockwise
							strokeWidth={0}>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill}
								/>
							))}
						</Pie>
						<Tooltip
							content={({ payload }) => {
								if (payload && payload.length > 0) {
									return (
										<div className="bg-white p-2 rounded-md shadow-md border border-gray-300">
											<p className="text-sm font-semibold">
												{payload[0].payload.name}:{" "}
												{payload[0].payload.value.toFixed(2)}%
											</p>
										</div>
									);
								}
								return null;
							}}
						/>
					</PieChart>

					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex flex-col items-center">
							<span className="text-xl font-semibold text-gray-800">
								{currentClients}
							</span>
							<span className="text-sm text-gray-600">Clients</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
