"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const generateData = (startDate: Date) => {
	return Array.from({ length: 31 }, (_, i) => {
		const date = addDays(startDate, i);
		return {
			date: format(date, "yyyy-MM-dd"),
			value: Math.floor(Math.random() * 75) + 25, // Random value between 25 and 100
		};
	});
};

const formatDate = (date: Date) => {
	return format(date, "MMM yyyy"); // Format diubah untuk menggunakan nama bulan yang dipotong
};

const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white p-2 border border-gray-300 rounded shadow">
				<p className="text-sm font-semibold">
					{format(new Date(label), "d MMM yyyy")}
				</p>
				<p className="text-sm text-green-600">Value: {payload[0].value}</p>
			</div>
		);
	}
	return null;
};

interface ChartProps {
	title: string;
	color: string;
}

const ChartComponent: React.FC<ChartProps> = ({ title, color }) => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const data = generateData(date || new Date());

	return (
		<Card className="w-full max-w-xl mx-auto border-0 shadow-none">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-lg font-semibold">{title}</CardTitle>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className={cn(
								"w-[140px] justify-start text-left font-normal",
								!date && "text-muted-foreground",
							)}>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? formatDate(date) : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0"
						align="end">
						<Calendar
							mode="single"
							selected={date}
							onSelect={(newDate) => setDate(newDate || new Date())}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</CardHeader>
			<CardContent>
				<div className="h-[300px] mt-4">
					<ResponsiveContainer
						width="100%"
						height="100%">
						<AreaChart
							data={data}
							margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
							<defs>
								<linearGradient
									id={`color${color}`}
									x1="0"
									y1="0"
									x2="0"
									y2="1">
									<stop
										offset="5%"
										stopColor={color}
										stopOpacity={0.8}
									/>
									<stop
										offset="95%"
										stopColor={color}
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="3 3"
								vertical={false}
								stroke="#E5E7EB"
							/>
							<XAxis
								dataKey="date"
								axisLine={false}
								tickLine={false}
								tickFormatter={(str) => format(new Date(str), "d MMM")}
								tick={{ fill: "#6B7280", fontSize: 12 }}
							/>
							<YAxis
								axisLine={false}
								tickLine={false}
								tick={{ fill: "#6B7280", fontSize: 12 }}
								domain={[0, 100]}
								ticks={[0, 25, 50, 75, 100]}
							/>
							<Tooltip content={<CustomTooltip />} />
							<Area
								type="monotone"
								dataKey="value"
								stroke={color}
								fillOpacity={1}
								fill={`url(#color${color})`}
								activeDot={{
									r: 8,
									fill: color,
									stroke: "#fff",
									strokeWidth: 2,
								}}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default function IbDashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<ChartComponent
				title="Commission Earned"
				color="#10B981"
			/>
			<ChartComponent
				title="Total Lots Collected"
				color="#06B6D4"
			/>
		</div>
	);
}
