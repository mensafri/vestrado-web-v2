"use client";

import { useState, useMemo } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, eachDayOfInterval, startOfDay, endOfDay } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

// Function to generate dummy data
const generateDummyData = (startDate: Date, endDate: Date) => {
	const dateRange = eachDayOfInterval({ start: startDate, end: endDate });
	return dateRange.map((date) => ({
		date: format(date, "d MMM"),
		registrations: Math.floor(Math.random() * 30) + 1, // Random number between 1 and 30
	}));
};

export default function ClientRegistrationPerformance() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2024, 6, 16),
		to: new Date(2024, 7, 28),
	});

	const chartData = useMemo(() => {
		if (dateRange?.from && dateRange?.to) {
			return generateDummyData(
				startOfDay(dateRange.from),
				endOfDay(dateRange.to),
			);
		}
		return [];
	}, [dateRange]);

	return (
		<Card className="w-full border-0 shadow-none">
			<CardHeader className="flex flex-wrap md:flex-nowrap md:items-center justify-between pb-4">
				<CardTitle className="text-base font-medium mb-2 md:mb-0">
					Client Registration Performance
				</CardTitle>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"justify-start text-left font-normal w-full md:w-auto",
								!dateRange && "text-muted-foreground",
							)}>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{dateRange?.from ? (
								dateRange.to ? (
									<>{`${format(dateRange.from, "d MMM yyyy")} - ${format(
										dateRange.to,
										"d MMM yyyy",
									)}`}</>
								) : (
									format(dateRange.from, "d MMM yyyy")
								)
							) : (
								<span>Pick a date range</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0"
						align="end">
						<Calendar
							initialFocus
							mode="range"
							defaultMonth={dateRange?.from}
							selected={dateRange}
							onSelect={setDateRange}
							numberOfMonths={1}
						/>
					</PopoverContent>
				</Popover>
			</CardHeader>
			<CardContent>
				<div className="h-[200px] sm:h-[300px]">
					<ResponsiveContainer
						width="100%"
						height="100%">
						<BarChart
							data={chartData}
							margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
							<CartesianGrid
								strokeDasharray="3 3"
								vertical={false}
							/>
							<XAxis
								dataKey="date"
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 12 }}
								interval="preserveStartEnd"
							/>
							<YAxis
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 12 }}
								domain={[0, "dataMax + 5"]}
							/>
							<Tooltip />
							<Bar
								dataKey="registrations"
								fill="#4ade80"
								radius={[4, 4, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
