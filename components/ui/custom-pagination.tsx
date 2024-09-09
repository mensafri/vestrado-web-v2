// components/ui/pagination.tsx
import React from "react";
import { Button } from "./button";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const CustomPagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<div className="flex items-center space-x-2">
			<Button
				variant="outline"
				onClick={handlePrevious}
				disabled={currentPage === 1}
				className="px-3 py-2 bg-gray-200 text-gray-600 disabled:bg-gray-100">
				Previous
			</Button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<Button
				variant="outline"
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className="px-3 py-2 bg-gray-200 text-gray-600 disabled:bg-gray-100">
				Next
			</Button>
		</div>
	);
};
