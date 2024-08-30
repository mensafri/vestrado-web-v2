"use client";

import { ibSidebarLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IbSidebar = () => {
	const pathName = usePathname();

	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href="/ib-panel/dashboard"
					className="mb-2 cursor-pointer flex items-center gap-2">
					<Image
						src="/icons/logo.png"
						width={240}
						height={56}
						alt="Vestrado Logo"
					/>
				</Link>
				{ibSidebarLinks.map((item) => {
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
			</nav>
		</section>
	);
};

export default IbSidebar;
