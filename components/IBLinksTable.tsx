"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Copy, Edit, Trash } from "lucide-react";
import Image from "next/image";

const data = Array(6).fill({
	id: 82763,
	name: "YouTube",
	link: "https://myvestrado.com/hh",
	active: "Yes",
	clicks: 829,
	registration: 576,
	promoCode: "78 Lots",
});

export default function IBLinksTable() {
	const [activeTab, setActiveTab] = useState("links");

	const handleCopy = (link: string) => {
		navigator.clipboard.writeText(link);
		alert(`Copied: ${link}`);
	};

	const handleEdit = (id: number) => {
		alert(`Editing item with ID: ${id}`);
	};

	const handleDelete = (id: number) => {
		if (confirm(`Are you sure you want to delete the item with ID: ${id}?`)) {
			alert(`Deleted item with ID: ${id}`);
		}
	};

	const bannerData = [
		{
			id: 1,
			image: "/images/banner1.png", // Replace with your local image path
			active: "Yes",
			language: "English",
			campaign: "20% Recovery Bonus",
			code: "20RC2023",
		},
		{
			id: 2,
			image: "/images/banner2.png", // Replace with your local image path
			active: "Yes",
			language: "English",
			campaign: "Year End Golden Rush",
			code: "YEGR2023",
		},
	];

	return (
		<div className="w-full max-w-[49rem] mx-auto bg-white p-6 rounded-2xl shadow">
			{/* Tabs */}
			<Tabs
				value={activeTab}
				onValueChange={(val) => setActiveTab(val)}>
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
					<TabsList className="bg-gray-100">
						<TabsTrigger value="links">IB Links</TabsTrigger>
						<TabsTrigger value="banners">Banners</TabsTrigger>
					</TabsList>
					<Button
						variant="outline"
						className="flex items-center gap-2">
						<span>+ Create New Link</span>
					</Button>
				</div>
				{/* Table Content */}
				<TabsContent value="links">
					<div className="overflow-x-auto rounded-lg">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>ID</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Link</TableHead>
									<TableHead>Active</TableHead>
									<TableHead>Clicks</TableHead>
									<TableHead>Registration</TableHead>
									<TableHead>Promo Code</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data.map((item, index) => (
									<TableRow key={index}>
										<TableCell>{item.id}</TableCell>
										<TableCell>{item.name}</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<span className="text-blue-500 underline">
													{item.link}
												</span>
												<Button
													variant="outline"
													size="sm"
													className="bg-green-100 text-green-700 hover:bg-green-200"
													onClick={() => handleCopy(item.link)}>
													<Copy className="w-4 h-4 mr-1" />
													Copy
												</Button>
											</div>
										</TableCell>
										<TableCell>{item.active}</TableCell>
										<TableCell>{item.clicks}</TableCell>
										<TableCell>{item.registration}</TableCell>
										<TableCell>{item.promoCode}</TableCell>
										<TableCell>
											<div className="flex gap-2">
												<Button
													variant="outline"
													size="sm"
													className="bg-blue-100 text-blue-700 hover:bg-blue-200"
													onClick={() => handleEdit(item.id)}>
													<Edit className="w-4 h-4 mr-1" />
													Edit
												</Button>
												<Button
													variant="destructive"
													size="sm"
													onClick={() => handleDelete(item.id)}>
													<Trash className="w-4 h-4 mr-1" />
													Delete
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
					<div className="flex justify-between items-center mt-4 text-sm text-gray-600">
						<span>
							<strong>1</strong> | 2 | 3{" "}
							<span className="text-gray-400">out of 27</span>
						</span>
						<span>Showing 1-6 of 27</span>
					</div>
				</TabsContent>
				<TabsContent value="banners">
					<div className="overflow-x-auto p-4">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Banner Preview</TableHead>
									<TableHead>Active</TableHead>
									<TableHead>Language</TableHead>
									<TableHead>Campaign</TableHead>
									<TableHead>Code</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{bannerData.map((banner) => (
									<TableRow key={banner.id}>
										<TableCell>
											<div className="w-40 h-24 relative rounded-md overflow-hidden">
												<Image
													src={banner.image}
													alt={`Banner ${banner.id}`}
													fill
													className="object-cover"
												/>
											</div>
										</TableCell>
										<TableCell>{banner.active}</TableCell>
										<TableCell>{banner.language}</TableCell>
										<TableCell>{banner.campaign}</TableCell>
										<TableCell>
											<Button
												variant="outline"
												className="flex items-center gap-2">
												<Copy className="h-4 w-4" />
												Copy Code
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
