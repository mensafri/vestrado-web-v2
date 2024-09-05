"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpDown,
	CircleFadingPlus,
	CircleMinus,
	CircleChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";

// Define the shape of the TransactionHistory type
export type TransactionHistory = {
	id: number;
	type: "deposit" | "withdraw" | "transfer";
	dateCreated: Date;
	paymentSystem: "Online Banking" | "Instant EFT";
	status: "Pending" | "Approved" | "Declined";
};

// Define the columns for the table
export const transactionsHistoryColumns: ColumnDef<TransactionHistory>[] = [
	{
		accessorKey: "type",
		header: "Type",
		cell: ({ row }) => {
			const type = row.getValue("type");
			let icon;
			switch (type) {
				case "deposit":
					icon = (
						<div className="bg-[#DBFBE5] rounded-full p-2">
							<CircleFadingPlus className="text-[#00A133] " />
						</div>
					);
					break;
				case "withdraw":
					icon = (
						<div className="bg-[#FBEBDB] rounded-full p-2">
							<CircleMinus className="text-[#D76A06] " />
						</div>
					);
					break;
				case "transfer":
					icon = (
						<div className="bg-[#D8E5FF] rounded-full p-2">
							<CircleChevronRight className="text-[#3042E6] " />
						</div>
					);
					break;
			}

			return <div className="flex items-center">{icon}</div>;
		},
	},
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Transaction ID
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <div className="text-start ml-5">{row.getValue("id")}</div>;
		},
	},
	{
		accessorKey: "dateCreated",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Date Created
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			// Safely casting dateCreated as a Date object
			const date = new Date(row.getValue("dateCreated") as string);
			return format(date, "yyyy-MM-dd hh:mm a");
		},
	},
	{
		accessorKey: "paymentSystem",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Payment System
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const status = row.getValue("status") as string;
			let statusColor = "";
			switch (status) {
				case "Approved":
					statusColor = "bg-green-100 text-green-600";
					break;
				case "Pending":
					statusColor = "bg-yellow-100 text-yellow-600";
					break;
				case "Declined":
					statusColor = "bg-red-100 text-red-600";
					break;
			}

			return (
				<span
					className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
					{status}
				</span>
			);
		},
	},
];
