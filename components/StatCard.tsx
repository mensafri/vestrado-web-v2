"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

interface StatCardProps {
	title: string;
	value: number;
	total: number;
	unit: string; // The unit of the value (like $, Lots, etc.)
}

export function StatCard({
	title,
	value,
	total,
	unit,
}: Readonly<StatCardProps>) {
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
		new Date(),
	);

	// Calculate percentage based on the absolute value to avoid negative percentages
	const completedPercentage = Math.min((Math.abs(value) / total) * 100, 100);
	const remainingPercentage = 100 - completedPercentage;

	// Define colors based on whether the value is positive or negative
	const chartColors = {
		completed: value < 0 ? "#D94100" : "#00D915", // Red for negative, green for positive
		remaining: "#E8F2E8",
	};

	// Change icon based on positive/negative value
	const iconSrc = value < 0 ? "/icons/down.png" : "/icons/up.png";

	return (
		<Card className="w-full border-0 rounded-3xl p-2">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-gray-700">
					{title}
				</CardTitle>
				<span className="text-4xl font-semibold text-gray-700">
					{unit === "$"
						? `${unit}${Math.abs(value).toLocaleString()}` // Show absolute value for negative amounts
						: `${Math.abs(value).toLocaleString()} ${unit}`}{" "}
					{/* Use absolute value */}
				</span>
			</CardHeader>
			<CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center">
				<div className="text-center sm:text-left">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
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
							data={[
								{
									name: "Completed",
									value: completedPercentage,
									fill: chartColors.completed,
								},
								{
									name: "Remaining",
									value: remainingPercentage,
									fill: chartColors.remaining,
								},
							]}
							dataKey="value"
							nameKey="name"
							innerRadius="70%"
							outerRadius="100%"
							startAngle={90} // Start from the right
							endAngle={540} // Rotate clockwise to the left
							strokeWidth={0}
						/>
					</PieChart>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 relative">
								<Image
									src={iconSrc}
									fill
									className="object-cover"
									alt="Icon"
								/>
							</div>
							<span
								className="text-2xl font-bold"
								style={{ color: chartColors.completed }}>
								{Math.round(completedPercentage)}%{" "}
								{/* Show absolute percentage */}
							</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
