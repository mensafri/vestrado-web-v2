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
import { referralsData } from "@/lib/data";

const currencyOptions = ["USD", "EUR", "GBP"]; // Currency options for dropdown

export default function DirectReferralsTable() {
	const [selectedCurrency, setSelectedCurrency] = useState("USD");
	const [selectedDateRange, setSelectedDateRange] = useState<
		DateRange | undefined
	>({
		from: new Date(2024, 7, 18),
		to: new Date(),
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [sortColumn, setSortColumn] = useState<string | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
		null,
	);

	const itemsPerPage = 7;

	// Filter referrals based on the selected date range
	const filteredReferrals = referralsData.filter((referral) => {
		if (selectedDateRange?.from && selectedDateRange?.to) {
			return isWithinInterval(referral.date, {
				start: selectedDateRange.from,
				end: selectedDateRange.to,
			});
		}
		return true; // Show all referrals if no date range is selected
	});

	const totalPages = Math.ceil(filteredReferrals.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Sorting logic
	const handleSort = (column: string) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	// Apply sorting to the filtered data
	const sortedReferrals = [...filteredReferrals].sort((a, b) => {
		if (!sortColumn || !sortDirection) return 0;
		if (sortColumn === "name") {
			return sortDirection === "asc"
				? a.name.localeCompare(b.name)
				: b.name.localeCompare(a.name);
		} else if (sortColumn === "balance" || sortColumn === "commission") {
			return sortDirection === "asc"
				? a[sortColumn] - b[sortColumn]
				: b[sortColumn] - a[sortColumn];
		} else {
			return 0;
		}
	});

	const currentReferrals = sortedReferrals.slice(startIndex, endIndex);

	return (
		<div className="w-full">
			<div className="flex flex-wrap justify-between items-center mb-4 px-4 gap-4">
				<h2 className="text-lg font-bold">Direct Referrals</h2>
				<div className="flex flex-wrap gap-4 items-center">
					{/* Date Range Picker */}
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="flex items-center rounded-full border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
							className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100 focus:outline-none">
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

			{/* Table */}
			<div className="rounded-3xl bg-white p-4 md:p-6 border-0 w-full overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								<Button
									variant="ghost"
									className="flex items-center"
									onClick={() => handleSort("name")}>
									Name <ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>
								<Button
									variant="ghost"
									className="flex items-center"
									onClick={() => handleSort("balance")}>
									Balance, {selectedCurrency}{" "}
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>
								<Button
									variant="ghost"
									className="flex items-center"
									onClick={() => handleSort("commission")}>
									Commission, {selectedCurrency}{" "}
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>Country</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{/* Referral Rows */}
						{currentReferrals.map((referral, index) => (
							<TableRow key={index}>
								<TableCell>{referral.name}</TableCell>
								<TableCell>{referral.balance.toFixed(2)}</TableCell>
								<TableCell>{referral.commission.toFixed(2)}</TableCell>
								<TableCell>{referral.country}</TableCell>
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
		</div>
	);
}
