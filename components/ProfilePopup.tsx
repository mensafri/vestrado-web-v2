import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilePopup: React.FC = () => {
	return (
		<>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<div className="flex justify-between items-center mb-4">
					<div>
						<p className="text-gray-600 text-sm">Balance (USD)</p>
						<h2 className="text-3xl font-semibold">$2,882.00</h2>
					</div>
					<div className="bg-[#363736] px-4 py-2 rounded-full">
						<span className="text-white text-sm">ECN (#728177)</span>
					</div>
				</div>
				<div className="flex justify-between mt-2">
					<ActionButton
						label="Deposit"
						iconSrc="/icons/depo_icon.png"
					/>
					<ActionButton
						label="Withdraw"
						iconSrc="/icons/wd_icon.png"
					/>
					<ActionButton
						label="Transfer"
						iconSrc="/icons/transfer_icon.png"
					/>
					<ActionButton
						label="History"
						iconSrc="/icons/history_icon.png"
					/>
				</div>
			</div>

			<div className="bg-white p-4 rounded-lg shadow-md space-y-1">
				<MenuItem
					label="Account Verification"
					route="/account-verification"
				/>
				<MenuItem
					label="Open Live Account"
					route="/open-live-account"
				/>
				<MenuItem
					label="Open Demo Account"
					route="/open-demo-account"
				/>
				<MenuItem
					label="Contact Account Manager"
					route="/contact-account-manager"
				/>
				<MenuItem
					label="Switch to Demo Account"
					route="/switch-to-demo-account"
				/>
			</div>

			<div className="bg-white p-4 rounded-lg shadow-md space-y-1">
				<MenuItem
					label="Notification"
					route="/notification"
					notificationCount={10}
				/>
				<MenuItem
					label="Messages"
					route="/messages"
				/>
				<MenuItem
					label="New Promotion Alert"
					route="/new-promotion-alert"
				/>
				<MenuItem
					label="Profile Settings"
					route="/profile-settings"
				/>
			</div>
		</>
	);
};

interface ActionButtonProps {
	label: string;
	iconSrc: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, iconSrc }) => (
	<div className="flex flex-col items-center">
		<div className="p-4 bg-[#f0f0f0] rounded-full">
			<Image
				src={iconSrc}
				alt={label}
				width={40}
				height={40}
			/>
		</div>
		<p className="mt-2 text-gray-700 text-sm">{label}</p>
	</div>
);

interface MenuItemProps {
	label: string;
	route: string;
	notificationCount?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
	label,
	route,
	notificationCount,
}) => (
	<Link
		href={route}
		className="flex justify-between items-center py-1">
		<span className="text-sm font-medium">{label}</span>
		{notificationCount ? (
			<span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
				{notificationCount}
			</span>
		) : (
			<svg
				className="w-4 h-4 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 5l7 7-7 7"></path>
			</svg>
		)}
	</Link>
);

export default ProfilePopup;
