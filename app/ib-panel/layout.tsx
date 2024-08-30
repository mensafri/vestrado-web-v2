import IbSidebar from "@/components/IbSidebar";

const IbPanelLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	<div className="w-full flex bg-sky-2 flex-row">
		<IbSidebar />
		<div className="flex flex-col size-full">{children}</div>
	</div>;
};

export default IbPanelLayout;
