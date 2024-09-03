"use client";

import { clientSidebarLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ClientSidebar = () => {
	const pathName = usePathname();

	return (
		<div className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href="/client-panel/dashboard"
					className="mb-8 cursor-pointer w-44 h-7 relative flex items-center gap-2">
					<Image
						src="/icons/logo.png"
						fill
						className="object-contain"
						alt="Vestrado Logo"
					/>
				</Link>
				{clientSidebarLinks.map((item) => {
					const isActive =
						pathName === item.route || pathName?.startsWith(`${item.route}/`);

					return (
						<Link
							href={item.route}
							key={item.label}
							className={cn(
								"flex flex-row w-full justify-between items-center rounded-lg",
								{ "bg-primary": isActive },
							)}>
							<div className={cn("sidebar-link", { "bg-primary": isActive })}>
								<div className="relative size-6">
									<Image
										src={isActive ? item.imgActive : item.imgURL}
										alt={item.label}
										fill
									/>
								</div>
								<p
									className={cn("sidebar-label", {
										"!text-white": isActive,
									})}>
									{item.label}
								</p>
							</div>
							{isActive ? (
								<ChevronRight className="text-[#25D95E] mr-2" />
							) : (
								<ChevronRight className="bg-transparent text-transparent" />
							)}
						</Link>
					);
				})}
				<Link
					href="/ib-panel/dashboard"
					className="cursor-pointer flex items-center gap-2">
					<Image
						src="/icons/request_ib.png"
						width={255}
						height={545}
						alt="Vestrado Logo"
					/>
				</Link>
				<Link
					href="/client-panel/profile"
					className={cn("sidebar-link", {
						"bg-primary": pathName === "/client-panel/profile",
					})}>
					<div className="relative size-6">
						<Image
							src={
								pathName === "/client-panel/profile"
									? "/sidebar/profile_active.png"
									: "/sidebar/profile.png"
							}
							alt="Profile Icon"
							fill
						/>
					</div>
					<p
						className={cn("sidebar-label", {
							"!text-white": pathName === "/client-panel/profile",
						})}>
						Profile
					</p>
				</Link>
				<Link
					href="/client-panel/dashboard"
					className="sidebar-link">
					<div className="relative size-6">
						<Image
							src="/sidebar/logout.png"
							alt="Profile Icon"
							fill
						/>
					</div>
					<p className="sidebar-label">Log Out</p>
				</Link>
			</nav>
		</div>
	);
};

export default ClientSidebar;
