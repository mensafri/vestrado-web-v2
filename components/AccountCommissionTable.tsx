"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowUpDown, Settings2 } from "lucide-react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isWithinInterval, parseISO } from "date-fns";
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
import { accountData } from "@/lib/data"; // Import data

const currencyOptions = ["USD", "EUR", "GBP"]; // Currency options for dropdown
const today = new Date();
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(today.getDate() - 30);

export default function AccountCommissionTable() {
	const [selectedCurrency, setSelectedCurrency] = useState("USD");
	const [selectedDateRange, setSelectedDateRange] = useState<
		DateRange | undefined
	>({
		from: twoWeeksAgo, // Tanggal 2 minggu yang lalu
		to: today, // Tanggal hari ini
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [sortColumn, setSortColumn] = useState<keyof AccountData | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
		null,
	);

	const itemsPerPage = 7;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Sorting logic
	const handleSort = (column: keyof AccountData) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	// Filtering by date range
	const filteredData = accountData.filter((referral) => {
		if (selectedDateRange?.from && selectedDateRange?.to) {
			const registrationDate = new Date(referral.registrationDate); // Convert date from string
			return isWithinInterval(registrationDate, {
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

		// Sorting for boolean columns
		if (typeof aValue === "boolean" && typeof bValue === "boolean") {
			return sortDirection === "asc"
				? aValue === bValue
					? 0
					: aValue
					? -1
					: 1
				: aValue === bValue
				? 0
				: aValue
				? 1
				: -1;
		}

		// Sorting for date column
		if (sortColumn === "registrationDate") {
			const dateA = new Date(a.registrationDate).getTime();
			const dateB = new Date(b.registrationDate).getTime();
			return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
		}

		return 0;
	});

	const currentReferrals = sortedData.slice(startIndex, endIndex);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	return (
		<>
			<div className="flex flex-row justify-between items-center px-6 mb-4">
				<h2 className="text-lg font-bold">Account Commission</h2>
				<div className="flex items-center space-x-4">
					{/* Date Range Picker */}
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="flex items-center">
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
					<div>
						<select
							value={selectedCurrency}
							onChange={(e) => setSelectedCurrency(e.target.value)}
							className="bg-white border items-center justify-center text-gray-700 rounded-md px-4 py-2">
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
			<div className="bg-green-50 p-4 mb-4 rounded-lg flex justify-between items-center">
				<Button
					className="bg-black flex flex-row gap-2 text-white px-6 py-1 text-sm rounded-lg"
					size="sm">
					Calculate Total
					<Settings2 className="text-sm" />
				</Button>
				<span className="text-sm font-bold">Total Display</span>
			</div>

			{/* Table */}
			<div className="rounded-3xl p-3 bg-white w-full max-w-[50rem] overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							{[
								"account",
								"accountType",
								"country",
								"registrationDate",
								"isIb",
								"level",
								"commissionLots",
								"commissionReceived",
							].map((column) => (
								<TableHead
									className="w-full text-nowrap font-semibold"
									key={column}>
									<Button
										variant="ghost"
										className="flex items-center"
										onClick={() => handleSort(column as keyof AccountData)}>
										{column.toLocaleUpperCase()}{" "}
										<ArrowUpDown className="ml-2 h-4 w-4" />
									</Button>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentReferrals.map((referral, index) => (
							<TableRow key={index}>
								<TableCell>{referral.account}</TableCell>
								<TableCell>{referral.accountType}</TableCell>
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
