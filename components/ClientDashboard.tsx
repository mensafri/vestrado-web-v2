"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
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
	value: string;
	percentage: number;
	date: Date;
	chartColors: { completed: string; remaining: string };
}

function StatCard({
	title,
	value,
	percentage,
	date,
	chartColors,
}: Readonly<StatCardProps>) {
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
		date,
	);
	const remainingPercentage = 100 - percentage;

	const chartData = [
		{ name: "Completed", value: percentage, fill: chartColors.completed },
		{
			name: "Remaining",
			value: remainingPercentage,
			fill: chartColors.remaining,
		},
	];

	// Define config object
	const config = {
		completed: {
			label: "Completed",
			color: chartColors.completed,
		},
		remaining: {
			label: "Remaining",
			color: chartColors.remaining,
		},
	};

	return (
		<Card className="w-full sm:w-[26rem] border-0 rounded-3xl p-2 ">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-gray-7">
					{title}
				</CardTitle>
				<span className="text-4xl font-semibold text-gray-7">{value}</span>
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
				<ChartContainer
					config={config}
					className="relative w-[8rem] h-[8rem] flex items-center justify-center">
					<>
						<PieChart
							width={130}
							height={130}>
							<Pie
								data={chartData}
								dataKey="value"
								nameKey="name"
								innerRadius="70%"
								outerRadius="100%"
								startAngle={90}
								endAngle={-270}
								strokeWidth={0}
							/>
						</PieChart>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="flex items-center gap-1">
								<div className="w-3 h-3 relative">
									<Image
										src="/icons/up.png"
										fill
										className="object-cover"
										alt="UP"
									/>
								</div>
								<span
									className="text-2xl font-bold"
									style={{ color: chartColors.remaining }}>
									{percentage}%
								</span>
							</div>
						</div>
					</>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

export default function ClientDashboard() {
	const currentDate = new Date();

	const profitChartColors = {
		completed: "#E8F2E8", // Linear gradient is not directly applicable in the chart color, use the final color.
		remaining: "#00D915",
	};

	const lotTradedChartColors = {
		completed: "#E8F2E8", // Linear gradient is not directly applicable in the chart color, use the final color.
		remaining: "#00D915",
	};

	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
			<StatCard
				title="Total Profit"
				value="$1,230.81"
				percentage={62}
				date={currentDate}
				chartColors={profitChartColors}
			/>
			<StatCard
				title="Total Lot Traded"
				value="19 Lots"
				percentage={62}
				date={currentDate}
				chartColors={lotTradedChartColors}
			/>
		</div>
	);
}
