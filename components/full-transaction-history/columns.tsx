"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpDown,
	CircleChevronRight,
	CircleFadingPlus,
	CircleMinus,
} from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";

export const fullTransactionsHistoryColumns: ColumnDef<TransactionHistory>[] = [
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
		accessorKey: "account",
		header: "Account",
		cell: ({ row }) => {
			return <span>{row.getValue("account")}</span>;
		},
	},
	{
		accessorKey: "amount",
		header: "Amount",
		cell: ({ row }) => {
			return (
				<span>
					{row.getValue("amount")} {row.getValue("currency")}
				</span>
			);
		},
	},
	{
		accessorKey: "currency",
		header: "Currency",
		cell: ({ row }) => {
			return <span>{row.getValue("currency")}</span>;
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
				case "Completed":
					statusColor = "bg-blue-100 text-blue-600";
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
