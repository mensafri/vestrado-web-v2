import ClientSidebar from "@/components/ClientSidebar";

const ClienPanelLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="w-full flex bg-sky-2 flex-row">
			<ClientSidebar />
			<div className="flex flex-col size-full">{children}</div>
		</div>
	);
};

export default ClienPanelLayout;
