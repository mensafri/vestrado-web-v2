"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // ShadCN switch component

export default function PersonalSettings() {
	const [smsNotificationEnabled, setSmsNotificationEnabled] = useState(true);
	const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

	return (
		<div className="bg-white p-6 rounded-2xl w-1/2">
			<h3 className="font-semibold text-lg mb-4">Personal Settings</h3>

			{/* Notification Preferences */}
			<div className="mb-6">
				<label className="text-sm text-gray-500 mb-2 block">
					Notification Preferences
				</label>
				<div className="flex justify-between items-center mb-4">
					<h4 className="font-medium">Notification Preferences</h4>
					<Button
						variant="outline"
						size="sm">
						Change
					</Button>
				</div>
				<div className="grid grid-cols-3 gap-2">
					{[
						"Application",
						"Document",
						"Help Desk",
						"Transaction",
						"Payment",
						"Transfer",
						"Marketing",
						"Account",
						"Referrals",
					].map((label) => (
						<Button
							key={label}
							variant="outline"
							size="sm"
							className="w-full py-2">
							{label}
						</Button>
					))}
				</div>
			</div>

			{/* SMS Notification */}
			<div className="flex justify-between items-center mb-6">
				<div>
					<label className="text-sm text-gray-500 block">
						SMS Notification
					</label>
				</div>
				<div className="flex items-center space-x-2">
					{smsNotificationEnabled ? (
						<span className="text-green-600 font-semibold">Enable</span>
					) : (
						<span className="text-gray-400 font-semibold">Disable</span>
					)}
					<Switch
						checked={smsNotificationEnabled}
						onCheckedChange={setSmsNotificationEnabled}
					/>
				</div>
			</div>

			{/* Two-Factor Authentication */}
			<div className="flex justify-between items-center">
				<div>
					<label className="text-sm text-gray-500 block">
						Two-Factor Authentication
					</label>
				</div>
				<div className="flex items-center space-x-2">
					{twoFactorEnabled ? (
						<span className="text-green-600 font-semibold">Enable</span>
					) : (
						<span className="text-gray-400 font-semibold">Disable</span>
					)}
					<Switch
						checked={twoFactorEnabled}
						onCheckedChange={setTwoFactorEnabled}
					/>
				</div>
			</div>
		</div>
	);
}
