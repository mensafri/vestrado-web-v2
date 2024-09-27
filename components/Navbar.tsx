"use client";
import { clientSidebarLinks, ibSidebarLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import WidgetLink from "./WidgetLink";
import ProfilePopup from "./ProfilePopup";

const Navbar = ({ type }: { type: "client" | "ib" }) => {
	const pathName = usePathname();

	const getLabelByRoute = (route: string) => {
		const link =
			type === "client"
				? clientSidebarLinks.find((link) => link.route === route)
				: ibSidebarLinks.find((link) => link.route === route);
		return link ? link.label : "Loyalty Store";
	};

	return (
		<div className="sticky top-0 flex w-full flex-row items-center py-6 px-6 bg-white z-50">
			<p className="font-montserrat font-bold text-xl">
				{getLabelByRoute(pathName)}
			</p>
			<div className="flex flex-row items-center ml-48 w-96 justify-between bg-sky-3 gap-2 rounded-2xl px-4 h-10">
				<Input
					className="bg-sky-3 rounded-2xl border-none h-10 font-medium"
					placeholder="Find something here.."
				/>
				<Search color="#A5A2A2" />
			</div>
			<Link
				href={
					type === "client" ? "/ib-panel/dashboard" : "/client-panel/dashboard"
				}
				className="flex flex-row items-center gap-4 ml-6 text-black text-14 font-semibold bg-white border rounded-full p-4">
				{type === "client" ? "Client Panel" : "IB Panel"}
				<Image
					src="/icons/switch.png"
					width={20}
					height={20}
					alt="Switch"
				/>
			</Link>
			<Popover>
				<PopoverTrigger
					asChild
					className="ml-8">
					<Button
						variant="outline"
						className="rounded-full p-6 bg-sky-4">
						<Image
							src="/icons/widget.png"
							width={24}
							height={24}
							alt="Widget"
						/>
					</Button>
				</PopoverTrigger>
				<PopoverContent className="bg-sky-4 w-full mr-32">
					<WidgetLink />
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger
					asChild
					className="ml-8 bg-sky-4 rounded-3xl py-7">
					<Button
						variant="outline"
						className="flex flex-row items-center gap-2 ">
						<Image
							src="/icons/demo_profile.png"
							width={40}
							height={40}
							alt="Profile"
						/>
						<div className="flex flex-col items-start text-black font-semibold justify-start">
							<p>Brooklyn</p>
							<p>1234567</p>
						</div>
						<ChevronDown className="text-black" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-4 space-y-2 w-[30rem] bg-sky-4 rounded-lg shadow-lg">
					<ProfilePopup />
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default Navbar;
