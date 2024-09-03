import ClientSidebar from "@/components/ClientSidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ClienPanelLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="w-full flex bg-sky-2 flex-row">
			<ClientSidebar />
			<div className="flex flex-col size-full">
				<Navbar type="client" />
				<div className="flex-1 overflow-scroll">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default ClienPanelLayout;
