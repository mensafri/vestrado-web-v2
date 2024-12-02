"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const SubIbSettings = () => {
	const levels = [
		{
			title: "IB LEVEL 1 (6 USD)",
			data: Array(4).fill({ asset: "Forex.v, Metals.v", commission: "1.00" }),
		},
		{
			title: "IB LEVEL 2 (3 USD)",
			data: Array(4).fill({ asset: "Forex.v, Metals.v", commission: "1.00" }),
		},
	];
	return (
		<div className="w-full p-4 bg-gray-50 rounded-3xl">
			{/* Tabs Header */}
			<Tabs defaultValue="sub-ib-settings">
				<div className="flex justify-between items-center mb-6">
					<TabsList className="bg-gray-100">
						<TabsTrigger value="sub-ib-settings">Sub-IB Settings</TabsTrigger>
						<TabsTrigger value="your-setting">Your Setting</TabsTrigger>
					</TabsList>
				</div>

				{/* Tab Content */}
				<TabsContent value="sub-ib-settings">
					{/* Header */}
					<div className="flex justify-between items-center bg-white p-4 rounded-2xl mb-4 shadow-sm">
						<span className="text-gray-800 font-semibold text-lg">
							IB LEVEL 1 (6 USD)
						</span>
						<Button
							variant="default"
							className="bg-black text-white rounded-md px-6 py-2">
							Edit Setting
						</Button>
					</div>

					{/* Table */}
					<div className="bg-white p-4 rounded-3xl shadow-sm overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Asset</TableHead>
									<TableHead>Commission</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{Array(5)
									.fill(null)
									.map((_, index) => (
										<TableRow key={index}>
											<TableCell className="text-gray-600">
												Forex.v, Metals.v
											</TableCell>
											<TableCell className="text-gray-600">1.00</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</div>
				</TabsContent>

				{/* Additional Tab Content */}
				<TabsContent value="your-setting">
					<div className="bg-gray-50 p-4 rounded-3xl">
						{levels.map((level, index) => (
							<div
								key={index}
								className="mb-6 last:mb-0">
								{/* Level Header */}
								<div className="bg-green-50 text-center text-gray-800 font-semibold py-4 rounded-t-2xl">
									{level.title}
								</div>

								{/* Table */}
								<div className="bg-white p-4 rounded-b-3xl shadow-sm overflow-x-auto">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Asset</TableHead>
												<TableHead>Commission</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{level.data.map((row, idx) => (
												<TableRow key={idx}>
													<TableCell className="text-gray-600">
														{row.asset}
													</TableCell>
													<TableCell className="text-gray-600">
														{row.commission}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default SubIbSettings;
