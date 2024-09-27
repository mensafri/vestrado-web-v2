"use client";

import { useState } from "react";
import { PencilIcon, CheckIcon } from "lucide-react";
import { Input } from "@/components/ui/input"; // ShadCN Input component

const ContactInformation = () => {
	const [isEditable, setIsEditable] = useState({
		email: false,
		password: false,
		phoneNumber: false,
	});

	const [contactData, setContactData] = useState({
		email: "brooklynb92@vestrado.com",
		password: "********",
		phoneNumber: "+60192833762",
		country: "Singapore",
	});

	const toggleEdit = (field: keyof typeof isEditable) => {
		setIsEditable((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	// Function to handle input changes (for both <input> and <select>)
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setContactData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="bg-white p-6 rounded-2xl flex-1 w-1/2">
			<h3 className="font-semibold text-lg mb-4">Contact Information</h3>
			<div className="space-y-4">
				{/* Email */}
				<div>
					<label className="text-sm text-gray-500">Email</label>
					<div
						className={`flex items-center border rounded-lg py-3 px-5 mt-1 ${
							isEditable.email
								? "border-blue-500 bg-blue-50"
								: "border-gray-200 bg-white"
						}`}>
						<Input
							name="email"
							value={contactData.email}
							readOnly={!isEditable.email}
							onChange={handleInputChange}
							className="bg-transparent flex-1 outline-none border-none"
						/>
						{isEditable.email ? (
							<CheckIcon
								className="w-5 h-5 text-green-500 cursor-pointer"
								onClick={() => toggleEdit("email")}
							/>
						) : (
							<PencilIcon
								className="w-5 h-5 text-gray-500 cursor-pointer"
								onClick={() => toggleEdit("email")}
							/>
						)}
					</div>
					{isEditable.email && (
						<span className="text-xs text-blue-500 mt-1 block">Editing...</span>
					)}
				</div>

				{/* Password */}
				<div>
					<label className="text-sm text-gray-500">Password</label>
					<div
						className={`flex items-center border rounded-lg py-3 px-5 mt-1 ${
							isEditable.password
								? "border-blue-500 bg-blue-50"
								: "border-gray-200 bg-white"
						}`}>
						<Input
							name="password"
							value={contactData.password}
							readOnly={!isEditable.password}
							onChange={handleInputChange}
							type="password"
							className="bg-transparent flex-1 outline-none border-none"
						/>
						{isEditable.password ? (
							<CheckIcon
								className="w-5 h-5 text-green-500 cursor-pointer"
								onClick={() => toggleEdit("password")}
							/>
						) : (
							<PencilIcon
								className="w-5 h-5 text-gray-500 cursor-pointer"
								onClick={() => toggleEdit("password")}
							/>
						)}
					</div>
					{isEditable.password && (
						<span className="text-xs text-blue-500 mt-1 block">Editing...</span>
					)}
				</div>

				{/* Phone Number */}
				<div>
					<label className="text-sm text-gray-500">Phone Number</label>
					<div
						className={`flex items-center border rounded-lg py-3 px-5 mt-1 ${
							isEditable.phoneNumber
								? "border-blue-500 bg-blue-50"
								: "border-gray-200 bg-white"
						}`}>
						<Input
							name="phoneNumber"
							value={contactData.phoneNumber}
							readOnly={!isEditable.phoneNumber}
							onChange={handleInputChange}
							className="bg-transparent flex-1 outline-none border-none"
						/>
						{isEditable.phoneNumber ? (
							<CheckIcon
								className="w-5 h-5 text-green-500 cursor-pointer"
								onClick={() => toggleEdit("phoneNumber")}
							/>
						) : (
							<PencilIcon
								className="w-5 h-5 text-gray-500 cursor-pointer"
								onClick={() => toggleEdit("phoneNumber")}
							/>
						)}
					</div>
					{isEditable.phoneNumber && (
						<span className="text-xs text-blue-500 mt-1 block">Editing...</span>
					)}
				</div>

				{/* Country of Residence */}
				<div>
					<label className="text-sm text-gray-500">Country of Residence</label>
					<div className="flex items-center border rounded-lg py-3 px-5 mt-1 bg-white border-gray-200">
						<select
							name="country"
							value={contactData.country}
							onChange={handleInputChange} // Handles select changes correctly
							className="bg-transparent flex-1 outline-none border-none text-gray-700">
							<option value="Singapore">Singapore</option>
							<option value="Malaysia">Malaysia</option>
							<option value="United States">United States</option>
							<option value="United Kingdom">United Kingdom</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
