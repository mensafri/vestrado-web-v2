import Footer from "@/components/Footer";
import IbSidebar from "@/components/IbSidebar";
import Navbar from "@/components/Navbar";

const IbPanelLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="w-full flex bg-sky-2 flex-row">
			<IbSidebar />
			<div className="flex flex-col size-full">
				<Navbar type="ib" />
				<div className="flex-1 overflow-scroll">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default IbPanelLayout;
