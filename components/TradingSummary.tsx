"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	format,
	subWeeks,
	subMonths,
	isWithinInterval,
	parseISO,
	compareAsc,
	compareDesc,
} from "date-fns";
import { CustomPagination } from "./ui/custom-pagination";
import Flag from "react-world-flags"; // Importing react-world-flags
import { trades } from "@/lib/data";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

// Component for time range filters
const TimeRangeFilter = ({
	currentRange,
	onChange,
}: {
	currentRange: string;
	onChange: (range: string) => void;
}) => {
	const ranges = ["2W", "1M", "3M", "6M", "1Y"];

	return (
		<div className="flex space-x-2 flex-wrap gap-2">
			{ranges.map((range) => (
				<Button
					key={range}
					variant={currentRange === range ? "default" : "outline"}
					onClick={() => onChange(range)}>
					{range}
				</Button>
			))}
		</div>
	);
};

export default function TradingSummary() {
	const [page, setPage] = useState(1);
	const itemsPerPage = 6;
	const [timeRange, setTimeRange] = useState("1Y");
	const [sortConfig, setSortConfig] = useState({
		key: "dateCreated",
		direction: "asc",
	});

	// Filter data based on time range
	const filterTradesByTimeRange = (range: string) => {
		const now = new Date();

		switch (range) {
			case "2W":
				return trades.filter((trade) =>
					isWithinInterval(parseISO(trade.dateCreated), {
						start: subWeeks(now, 2),
						end: now,
					}),
				);
			case "1M":
				return trades.filter((trade) =>
					isWithinInterval(parseISO(trade.dateCreated), {
						start: subMonths(now, 1),
						end: now,
					}),
				);
			case "3M":
				return trades.filter((trade) =>
					isWithinInterval(parseISO(trade.dateCreated), {
						start: subMonths(now, 3),
						end: now,
					}),
				);
			case "6M":
				return trades.filter((trade) =>
					isWithinInterval(parseISO(trade.dateCreated), {
						start: subMonths(now, 6),
						end: now,
					}),
				);
			case "1Y":
				return trades.filter((trade) =>
					isWithinInterval(parseISO(trade.dateCreated), {
						start: subMonths(now, 12),
						end: now,
					}),
				);
			default:
				return trades;
		}
	};

	// Sort trades based on the sortConfig
	const sortTrades = (tradesToSort: any[]) => {
		let sortedTrades = [...tradesToSort];
		const { key, direction } = sortConfig;
		sortedTrades.sort((a, b) => {
			const dateA = parseISO(a[key]);
			const dateB = parseISO(b[key]);
			return direction === "asc"
				? compareAsc(dateA, dateB)
				: compareDesc(dateA, dateB);
		});
		return sortedTrades;
	};

	// Toggle sorting order
	const handleSort = (key: string) => {
		let direction = "asc";
		if (sortConfig.key === key && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	// Get filtered and sorted trades
	const filteredTrades = filterTradesByTimeRange(timeRange);
	const sortedTrades = sortTrades(filteredTrades);

	// Pagination Logic
	const startIndex = (page - 1) * itemsPerPage;
	const paginatedTrades = sortedTrades.slice(
		startIndex,
		startIndex + itemsPerPage,
	);
	const totalPages = Math.ceil(sortedTrades.length / itemsPerPage);

	return (
		<div className="overflow-x-auto">
			<div className="pb-4 px-6">
				<div className="flex justify-between items-center">
					<div className="text-xl font-semibold">Trading Summary</div>
					{/* Time range filter buttons */}
					<TimeRangeFilter
						currentRange={timeRange}
						onChange={setTimeRange}
					/>
				</div>
			</div>
			<Card className="w-full border-0 rounded-3xl py-6">
				<CardContent>
					{/* Table */}
					<Table className="min-w-full table-auto">
						<TableHeader>
							<TableRow>
								<TableHead>Trades</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("dateCreated")}>
									<div className="flex items-center gap-2">
										Date Created
										{sortConfig.key === "dateCreated" &&
											(sortConfig.direction === "asc" ? (
												<ArrowUp className="h-4 w-4" />
											) : (
												<ArrowDown className="h-4 w-4" />
											))}
									</div>
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("closeTime")}>
									<div className="flex items-center gap-2">
										Close Time
										{sortConfig.key === "closeTime" &&
											(sortConfig.direction === "asc" ? (
												<ArrowUp className="h-4 w-4" />
											) : (
												<ArrowDown className="h-4 w-4" />
											))}
									</div>
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{paginatedTrades.map((trade) => (
								<TableRow key={trade.id}>
									<TableCell className="flex items-center">
										{/* Flags styling */}
										<div className="relative flex items-center">
											<div className="w-8 h-8 bg-white rounded-full overflow-hidden">
												<Flag
													code={trade.flags[0]}
													className="w-full h-full"
												/>
											</div>
											<div className="w-8 h-8 bg-white rounded-full overflow-hidden -ml-3 z-10">
												<Flag
													code={trade.flags[1]}
													className="w-full h-full"
												/>
											</div>
										</div>
										<div className="ml-4">
											<div className="font-bold">{trade.pair}</div>
											<div className="text-sm text-gray-500">
												{trade.pair.split(" VS ").join("/")}
											</div>
										</div>
									</TableCell>
									<TableCell>
										{format(parseISO(trade.dateCreated), "yyyy-MM-dd hh:mm a")}
									</TableCell>
									<TableCell>{trade.closeTime}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			{/* Pagination */}
			<div className="flex justify-between items-center mt-4 px-6">
				<span>
					Page {page} of {totalPages}
				</span>
				<CustomPagination
					currentPage={page}
					totalPages={totalPages}
					onPageChange={setPage}
				/>
			</div>
		</div>
	);
}
