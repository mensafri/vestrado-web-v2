"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isWithinInterval } from "date-fns";
import { CustomPagination } from "@/components/ui/custom-pagination";
import Image from "next/image";
import { notificationsData } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";
import { DateRange } from "react-day-picker";

const today = new Date();
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(today.getDate() - 30);

export default function Notifications() {
	const [currentPage, setCurrentPage] = useState(1);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: twoWeeksAgo, // Tanggal 2 minggu yang lalu
		to: today, // Tanggal hari ini
	});
	const itemsPerPage = 8;

	// Filter notifications based on selected date range
	const filteredNotifications =
		dateRange?.from && dateRange?.to
			? notificationsData.filter((notification) => {
					const notificationDate = new Date(notification.date);
					// Ensure 'from' and 'to' are valid dates before using them in 'isWithinInterval'
					if (dateRange.from && dateRange.to) {
						return isWithinInterval(notificationDate, {
							start: dateRange.from,
							end: dateRange.to,
						});
					}
					return true;
			  })
			: notificationsData;

	const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentNotifications = filteredNotifications.slice(
		startIndex,
		endIndex,
	);

	return (
		<div className="w-full my-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-bold">Notifications</h2>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center">
							<CalendarIcon className="mr-2 h-4 w-4" />
							{dateRange?.from ? (
								dateRange.to ? (
									<>
										{format(dateRange.from, "LLL dd, y")} -{" "}
										{format(dateRange.to, "LLL dd, y")}
									</>
								) : (
									format(dateRange.from, "LLL dd, y")
								)
							) : (
								"Select date range"
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
							numberOfMonths={2}
						/>
					</PopoverContent>
				</Popover>
			</div>

			{/* Notification list */}
			<div className="space-y-2">
				{currentNotifications.map((notification) => (
					<div
						key={notification.id}
						className="flex items-center space-x-4 py-6 px-8 bg-white rounded-lg shadow-none border-0">
						<Checkbox
							id={`notification-${notification.id}`}
							className="bg-sky-13 border-gray-9 border"
						/>
						<div className="w-16 h-16">
							<Image
								src={notification.iconUrl}
								alt=""
								className="object-cover rounded-lg"
								width={100}
								height={100}
							/>
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-center">
								<h3 className="text-base font-semibold">
									<label htmlFor={`notification-${notification.id}`}>
										{notification.title}
									</label>
								</h3>
							</div>
							<p className="text-gray-600">{notification.content}</p>
							<span className="text-sm text-gray-500">
								{format(new Date(notification.date), "PPP")}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className="mt-4 flex justify-between items-center mx-6">
				<span className="text-sm text-gray-600">
					Showing {startIndex + 1} -{" "}
					{Math.min(endIndex, filteredNotifications.length)} out of{" "}
					{filteredNotifications.length}
				</span>
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	);
}
