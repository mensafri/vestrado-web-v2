"use client";

import React, { useState, useMemo } from "react";
import { format } from "date-fns";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TValue> {
	columns: ColumnDef<TransactionHistory, TValue>[]; // Explicitly use the TransactionHistory type
	data: TransactionHistory[]; // The data is of type TransactionHistory
	pageSize: number;
}

export function FullTransactionsHistoryTable<TValue>({
	columns,
	data,
	pageSize,
}: DataTableProps<TValue>) {
	const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 7),
	});
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: pageSize,
	});

	// Memoize filtered data to avoid unnecessary recalculations
	const filteredData = useMemo(() => {
		if (!selectedRange) return data;

		return data.filter((row) => {
			const rowDate = new Date(row.dateCreated); // Accessing dateCreated
			return (
				selectedRange.from &&
				rowDate >= selectedRange.from &&
				(selectedRange.to ? rowDate <= selectedRange.to : true)
			);
		});
	}, [data, selectedRange]);

	const table = useReactTable({
		data: filteredData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onPaginationChange: setPagination,
		state: {
			sorting,
			pagination,
		},
	});

	return (
		<>
			<div className="flex flex-row justify-between items-center px-6 mb-4">
				<p className="font-montserrat font-bold">Transaction History</p>
				{/* Date Range Picker */}
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={`w-[300px] justify-start text-left font-normal ${
								!selectedRange ? "text-muted-foreground" : ""
							}`}>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{selectedRange?.from ? (
								selectedRange.to ? (
									<>
										{format(selectedRange.from, "LLL dd, y")} -{" "}
										{format(selectedRange.to, "LLL dd, y")}
									</>
								) : (
									format(selectedRange.from, "LLL dd, y")
								)
							) : (
								<span>Pick a date</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0"
						align="start">
						<Calendar
							mode="range"
							selected={selectedRange}
							onSelect={setSelectedRange}
							numberOfMonths={2}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>

			{/* Table */}
			<div className="rounded-3xl p-3 bg-white w-full max-w-[55rem] overflow-x-auto">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Pagination */}
			<div className="flex justify-between items-center mt-4 px-4">
				<div className="flex gap-2">
					<Button
						variant="outline"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					{Array.from({ length: table.getPageCount() }).map((_, index) => (
						<Button
							key={index}
							variant={
								index === table.getState().pagination.pageIndex
									? "default"
									: "outline"
							}
							onClick={() => table.setPageIndex(index)}>
							{index + 1}
						</Button>
					))}
					<Button
						variant="outline"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>

				<span>
					Page {table.getState().pagination.pageIndex + 1} of{" "}
					{table.getPageCount()}
				</span>
			</div>
		</>
	);
}
