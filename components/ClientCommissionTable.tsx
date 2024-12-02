"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowUpDown } from "lucide-react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isWithinInterval } from "date-fns";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { DateRange } from "react-day-picker";
import { CustomPagination } from "@/components/ui/custom-pagination";
import { clientData } from "@/lib/data"; // Ensure clientData is defined correctly

const currencyOptions = ["USD", "EUR", "GBP"];
const today = new Date();
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(today.getDate() - 14);

export default function ClientCommissionTable() {
	const [selectedCurrency, setSelectedCurrency] = useState("USD");
	const [selectedDateRange, setSelectedDateRange] = useState<
		DateRange | undefined
	>();
	const [currentPage, setCurrentPage] = useState(1);
	const [sortColumn, setSortColumn] = useState<keyof ClientData | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
		null,
	);

	const itemsPerPage = 7;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Sorting logic
	const handleSort = (column: keyof ClientData) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	// Filtering by date range
	const filteredData = clientData.filter((referral) => {
		if (selectedDateRange?.from && selectedDateRange?.to) {
			return isWithinInterval(referral.registrationDate, {
				start: selectedDateRange.from,
				end: selectedDateRange.to,
			});
		}
		return true;
	});

	// Sorting data
	const sortedData = [...filteredData].sort((a, b) => {
		if (!sortColumn || !sortDirection) return 0;

		const aValue = a[sortColumn];
		const bValue = b[sortColumn];

		// Sorting for string columns
		if (typeof aValue === "string" && typeof bValue === "string") {
			return sortDirection === "asc"
				? aValue.localeCompare(bValue)
				: bValue.localeCompare(aValue);
		}

		// Sorting for number columns
		if (typeof aValue === "number" && typeof bValue === "number") {
			return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
		}

		return 0;
	});

	const currentReferrals = sortedData.slice(startIndex, endIndex);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 mb-4 space-y-4 md:space-y-0">
				<h2 className="text-lg font-bold text-center md:text-left">
					Client Commission
				</h2>
				<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
					{/* Date Range Picker */}
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="flex items-center justify-center sm:w-auto w-full">
								<CalendarIcon className="mr-2 h-4 w-4" />
								{selectedDateRange?.from && selectedDateRange?.to
									? `${format(
											selectedDateRange.from,
											"dd MMM yyyy",
									  )} - ${format(selectedDateRange.to, "dd MMM yyyy")}`
									: "Select Date Range"}
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<Calendar
								mode="range"
								selected={selectedDateRange}
								onSelect={setSelectedDateRange}
							/>
						</PopoverContent>
					</Popover>

					{/* Currency Dropdown */}
					<div className="w-full sm:w-auto">
						<select
							value={selectedCurrency}
							onChange={(e) => setSelectedCurrency(e.target.value)}
							className="bg-white border w-full sm:w-auto text-gray-700 rounded-md px-4 py-2">
							{currencyOptions.map((currency) => (
								<option
									key={currency}
									value={currency}>
									Common Currency ({currency})
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			{/* "Calculate Total" Button */}
			<div className="bg-green-50 p-4 mb-4 rounded-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
				<Button
					className="bg-black flex flex-row gap-2 text-white px-6 py-1 text-sm rounded-lg"
					size="sm">
					Calculate Total
				</Button>
				<span className="text-sm font-bold">Total Display</span>
			</div>

			{/* Table */}
			<div className="rounded-3xl p-3 bg-white w-full max-w-[50rem] overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							{[
								"referrals",
								"country",
								"registrationDate",
								"isIb",
								"level",
								"commissionLots",
								"commissionReceived",
							].map((column) => (
								<TableHead
									className="w-full text-nowrap font-semibold text-sm md:text-base"
									key={column}>
									<Button
										variant="ghost"
										className="flex items-center justify-between"
										onClick={() => handleSort(column as keyof ClientData)}>
										<span>{column.toLocaleUpperCase()}</span>
										<ArrowUpDown className="ml-2 h-4 w-4" />
									</Button>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentReferrals.map((referral, index) => (
							<TableRow key={index}>
								<TableCell>{referral.referrals}</TableCell>
								<TableCell>{referral.country}</TableCell>
								<TableCell>
									{format(new Date(referral.registrationDate), "dd MMM yyyy")}
								</TableCell>
								<TableCell>{referral.isIb ? "Yes" : "No"}</TableCell>
								<TableCell>{referral.level}</TableCell>
								<TableCell>{referral.commissionLots}</TableCell>
								<TableCell>{referral.commissionReceived}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Custom Pagination */}
			<div className="flex justify-center mt-4">
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</>
	);
}
