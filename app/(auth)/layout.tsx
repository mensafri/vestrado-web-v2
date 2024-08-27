import AuthPhoto from "@/components/AuthPhoto";
import Image from "next/image";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex min-h-screen w-full justify-between font-montserrat bg-[#F5F5F5]">
			<div className="flex flex-col w-1/2">
				<div className="pt-6 px-8 flex flex-row items-center justify-between w-full">
					<Image
						src="/icons/logo.png"
						width={179.2}
						height={28}
						alt="Vestrado Logo"
					/>
					<div className="flex flex-row gap-2 items-center">
						<div className="w-5 h-5 relative">
							<Image
								src="/icons/en.png"
								fill
								className="object-cover"
								alt="Language"
							/>
						</div>
						<p className="font-semibold text-lg">EN</p>
					</div>
				</div>
				{children}
			</div>
			<div className="w-1/2 h-screen max-lg:hidden">
				<AuthPhoto />
			</div>
		</main>
	);
}
