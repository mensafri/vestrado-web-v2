"use client";
import { ibNavbarLinks, clientNavbarLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import WidgetLink from "./WidgetLink";
import ProfilePopup from "./ProfilePopup";
import { useState } from "react";

const Navbar = ({ type }: { type: "client" | "ib" }) => {
	const pathName = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const getLabelByRoute = (route: string) => {
		const link =
			type === "client"
				? clientNavbarLinks.find((link) => link.route === route)
				: ibNavbarLinks.find((link) => link.route === route);
		return link ? link.label : "Loyalty Store";
	};

	// Sidebar Links
	const sidebarLinks = type === "client" ? clientNavbarLinks : ibNavbarLinks;

	return (
		<>
			<div className="sticky top-0 flex flex-wrap w-full items-center py-4 px-6 bg-white z-50 shadow-md">
				{/* Label Section */}
				<div className="flex items-center flex-1">
					{/* Hamburger Button for Mobile */}
					<button
						className="md:hidden p-2 bg-white rounded-lg shadow-md mr-4"
						onClick={toggleSidebar}>
						{isSidebarOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
					<p className="font-montserrat font-bold text-lg">
						{getLabelByRoute(pathName)}
					</p>
				</div>

				{/* Search Section */}
				<div className="hidden md:flex flex-row items-center w-96 bg-sky-3 gap-2 rounded-2xl px-4 h-10">
					<Input
						className="bg-sky-3 rounded-2xl border-none h-10 font-medium"
						placeholder="Find something here.."
					/>
					<Search color="#A5A2A2" />
				</div>

				{/* Panel Link */}
				<Link
					href={
						type === "client"
							? "/ib-panel/dashboard"
							: "/client-panel/dashboard"
					}
					className="hidden lg:flex flex-row items-center gap-4 text-black text-14 font-semibold bg-white border rounded-full p-4 ml-6">
					{type === "client" ? "Client Panel" : "IB Panel"}
					<Image
						src="/icons/switch.png"
						width={20}
						height={20}
						alt="Switch"
					/>
				</Link>

				{/* Widget Button */}
				<Popover>
					<PopoverTrigger
						asChild
						className="ml-4">
						<Button
							variant="outline"
							className="rounded-full p-2 bg-sky-4">
							<Image
								src="/icons/widget.png"
								width={24}
								height={24}
								alt="Widget"
							/>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="bg-sky-4 w-full md:w-auto p-4">
						<WidgetLink />
					</PopoverContent>
				</Popover>

				{/* Profile Button */}
				<Popover>
					<PopoverTrigger
						asChild
						className="ml-4">
						<Button
							variant="outline"
							className="flex items-center gap-2 bg-sky-4 rounded-full p-2">
							<Image
								src="/icons/demo_profile.png"
								width={40}
								height={40}
								alt="Profile"
							/>
							<div className="hidden md:flex flex-col items-start text-black font-semibold">
								<p>Brooklyn</p>
								<p>1234567</p>
							</div>
							<ChevronDown className="text-black" />
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<ProfilePopup />
					</PopoverContent>
				</Popover>
			</div>

			{/* Sidebar */}
			{isSidebarOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
					<div className="w-64 bg-white shadow-lg h-full overflow-y-auto">
						{/* Sidebar Content */}
						<nav className="p-4 mt-24">
							{sidebarLinks.map((item) => (
								<Link
									key={item.route}
									href={item.route}
									className="block p-2 rounded-lg hover:bg-gray-200">
									{item.label}
								</Link>
							))}
						</nav>
					</div>
					{/* Close Sidebar on Overlay Click */}
					<div
						className="flex-1"
						onClick={toggleSidebar}></div>
				</div>
			)}
		</>
	);
};

export default Navbar;
