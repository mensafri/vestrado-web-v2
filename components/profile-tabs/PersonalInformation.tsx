"use client";

import { useState } from "react";
import { PencilIcon, CheckCircleIcon, CheckIcon } from "lucide-react";
import { Input } from "@/components/ui/input"; // ShadCN Input component
import Image from "next/image";

export default function PersonalInformation() {
	type EditableField = "firstName" | "lastName" | "dateOfBirth" | "language";

	const [isEditable, setIsEditable] = useState<Record<EditableField, boolean>>({
		firstName: false,
		lastName: false,
		dateOfBirth: false,
		language: false,
	});

	const [formData, setFormData] = useState({
		firstName: "Brooklyn",
		lastName: "Beckham",
		dateOfBirth: "17 August 1992",
		language: "English",
	});

	// Function to toggle editable state
	const toggleEdit = (field: EditableField) => {
		setIsEditable((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	// Function to handle input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="bg-white p-6 rounded-2xl w-full">
			<h3 className="font-semibold text-lg mb-6">Personal Information</h3>
			<div className="grid grid-cols-3 gap-8">
				{/* Profile Section */}
				<div className="flex flex-col items-center">
					<div className="h-52 w-52 relative rounded-full">
						<Image
							src="/icons/demo_profile.png" // replace with actual image path
							alt="Profile"
							className="object-cover"
							fill
						/>
					</div>
					<h4 className="mt-4 text-lg font-semibold">Brooklyn Beckham</h4>
					<p className="text-gray-500">Client ID: 11002</p>
					<div className="flex items-center mt-2 bg-green-3 px-6 py-1 rounded-full">
						<CheckCircleIcon className="text-green-4 w-4 h-4 mr-2" />
						<span className="text-green-4">Verified</span>
					</div>
				</div>

				{/* Input Fields Section */}
				<div className="col-span-2 grid grid-cols-2 gap-4">
					{/* First Name */}
					<div>
						<label className="text-sm text-gray-500">First Name</label>
						<div
							className={`flex items-center border rounded-xl py-3 px-5 mt-1 ${
								isEditable.firstName
									? "border-blue-500 bg-blue-50"
									: "border-gray-12 bg-white"
							}`}>
							<Input
								name="firstName"
								value={formData.firstName}
								readOnly={!isEditable.firstName}
								onChange={handleInputChange}
								className="bg-transparent flex-1 font-medium outline-none border-none text-gray-12"
							/>
							{isEditable.firstName ? (
								<CheckIcon
									className="w-5 h-5 font-medium text-green-500 cursor-pointer"
									onClick={() => toggleEdit("firstName")}
								/>
							) : (
								<PencilIcon
									className="w-5 h-5 font-medium text-gray-12 cursor-pointer"
									onClick={() => toggleEdit("firstName")}
								/>
							)}
						</div>
						{isEditable.firstName && (
							<span className="text-xs text-blue-500 mt-1 block">
								Editing...
							</span>
						)}
					</div>

					{/* Last Name */}
					<div>
						<label className="text-sm text-gray-500">Last Name</label>
						<div
							className={`flex items-center border rounded-xl py-3 px-5 mt-1 ${
								isEditable.lastName
									? "border-blue-500 bg-blue-50"
									: "border-gray-12 bg-white"
							}`}>
							<Input
								name="lastName"
								value={formData.lastName}
								readOnly={!isEditable.lastName}
								onChange={handleInputChange}
								className="bg-transparent flex-1 font-medium outline-none border-none text-gray-12"
							/>
							{isEditable.lastName ? (
								<CheckIcon
									className="w-5 h-5 font-medium text-green-500 cursor-pointer"
									onClick={() => toggleEdit("lastName")}
								/>
							) : (
								<PencilIcon
									className="w-5 h-5 font-medium text-gray-12 cursor-pointer"
									onClick={() => toggleEdit("lastName")}
								/>
							)}
						</div>
						{isEditable.lastName && (
							<span className="text-xs text-blue-500 mt-1 block">
								Editing...
							</span>
						)}
					</div>

					{/* Date of Birth */}
					<div>
						<label className="text-sm text-gray-500">Date of Birth</label>
						<div
							className={`flex items-center border rounded-xl py-3 px-5 mt-1 ${
								isEditable.dateOfBirth
									? "border-blue-500 bg-blue-50"
									: "border-gray-12 bg-white"
							}`}>
							<Input
								name="dateOfBirth"
								value={formData.dateOfBirth}
								readOnly={!isEditable.dateOfBirth}
								onChange={handleInputChange}
								className="bg-transparent flex-1 font-medium outline-none border-none text-gray-12"
							/>
							{isEditable.dateOfBirth ? (
								<CheckIcon
									className="w-5 h-5 font-medium text-green-500 cursor-pointer"
									onClick={() => toggleEdit("dateOfBirth")}
								/>
							) : (
								<PencilIcon
									className="w-5 h-5 font-medium text-gray-12 cursor-pointer"
									onClick={() => toggleEdit("dateOfBirth")}
								/>
							)}
						</div>
						{isEditable.dateOfBirth && (
							<span className="text-xs text-blue-500 mt-1 block">
								Editing...
							</span>
						)}
					</div>

					{/* Communication Language */}
					<div>
						<label className="text-sm text-gray-500">
							Communication Language
						</label>
						<div
							className={`flex items-center border rounded-xl py-3 px-5 mt-1 ${
								isEditable.language
									? "border-blue-500 bg-blue-50"
									: "border-gray-12 bg-white"
							}`}>
							<Input
								name="language"
								value={formData.language}
								readOnly={!isEditable.language}
								onChange={handleInputChange}
								className="bg-transparent flex-1 font-medium outline-none border-none text-gray-12"
							/>
							{isEditable.language ? (
								<CheckIcon
									className="w-5 h-5 font-medium text-green-500 cursor-pointer"
									onClick={() => toggleEdit("language")}
								/>
							) : (
								<PencilIcon
									className="w-5 h-5 font-medium text-gray-12 cursor-pointer"
									onClick={() => toggleEdit("language")}
								/>
							)}
						</div>
						{isEditable.language && (
							<span className="text-xs text-blue-500 mt-1 block">
								Editing...
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
