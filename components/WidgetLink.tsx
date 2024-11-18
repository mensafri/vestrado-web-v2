import * as React from "react";

interface LinkItem {
	name: string;
	route: string;
}

interface LinkSectionProps {
	title: string;
	items: LinkItem[];
}

const links: LinkSectionProps[] = [
	{
		title: "Services",
		items: [
			{ name: "Helpdesk", route: "/services/helpdesk" },
			{ name: "FAQ", route: "/services/faq" },
			{ name: "Tutorials Videos", route: "/services/tutorials-videos" },
			{ name: "Economic Calendar", route: "/services/economic-calendar" },
			{ name: "Forex Calculator", route: "/services/forex-calculator" },
			{ name: "IB Programme", route: "/services/ib-programme" },
		],
	},
	{
		title: "Funds",
		items: [
			{ name: "Deposit Funds", route: "/funds/deposit" },
			{ name: "Withdraw Funds", route: "/funds/withdraw" },
			{ name: "Transfer Funds", route: "/funds/transfer" },
			{ name: "Transaction History", route: "/funds/transaction-history" },
		],
	},
	{
		title: "Accounts",
		items: [
			{ name: "Account Overview", route: "/accounts/overview" },
			{ name: "Open Live Account", route: "/accounts/open-live" },
			{ name: "Open Demo Account", route: "/accounts/open-demo" },
			{ name: "Account Type", route: "/accounts/type" },
		],
	},
	{
		title: "Notification",
		items: [
			{ name: "All Notification", route: "/notification/all" },
			{ name: "New Promotions", route: "/notification/promotions" },
			{ name: "Messages", route: "/notification/messages" },
		],
	},
	{
		title: "Documents",
		items: [
			{ name: "All Notification", route: "/documents/all" },
			{ name: "New Promotions", route: "/documents/promotions" },
			{ name: "Messages", route: "/documents/messages" },
		],
	},
	{
		title: "Agreement",
		items: [
			{ name: "Accepted Documents", route: "/agreement/accepted-documents" },
			{ name: "Company Documents", route: "/agreement/company-documents" },
		],
	},
	{
		title: "Legal Informations",
		items: [
			{ name: "Risk Disclosure", route: "/legal/risk-disclosure" },
			{ name: "AML Policies", route: "/legal/aml-policies" },
			{ name: "Terms and Conditions", route: "/legal/terms-and-conditions" },
			{ name: "Privacy Policies", route: "/legal/privacy-policies" },
		],
	},
	{
		title: "Products",
		items: [
			{
				name: "Financial Instruments",
				route: "/products/financial-instruments",
			},
			{ name: "Forex", route: "/products/forex" },
			{ name: "Indices", route: "/products/indices" },
			{ name: "Shares", route: "/products/shares" },
			{ name: "Commodities", route: "/products/commodities" },
			{ name: "Cryptocurrencies", route: "/products/cryptocurrencies" },
		],
	},
	{
		title: "Copytrade",
		items: [
			{ name: "Explore Copytrade", route: "/copytrade/explore" },
			{ name: "Set Up Copytrade", route: "/copytrade/setup" },
			{ name: "Terms & Conditions", route: "/copytrade/terms-conditions" },
		],
	},
	{
		title: "IB Section",
		items: [
			{ name: "Dashboard", route: "/ib-section/dashboard" },
			{ name: "Reports", route: "/ib-section/reports" },
			{ name: "Marketing Tools", route: "/ib-section/marketing-tools" },
			{ name: "Optional Sharing", route: "/ib-section/optional-sharing" },
		],
	},
];

const LinkSection: React.FC<LinkSectionProps> = ({ title, items }) => (
	<div className="flex flex-col space-y-2">
		<h2 className="font-semibold text-gray-800 text-lg md:text-xl">{title}</h2>
		{items.map((item, index) => (
			<a
				key={index}
				href={item.route}
				aria-label={`Navigate to ${item.name}`}
				className="text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm md:text-base">
				{item.name}
			</a>
		))}
	</div>
);

const WidgetLink: React.FC = () => {
	return (
		<div className="w-full bg-sky-4 py-4 px-6 md:py-8 md:px-12 rounded-lg max-h-[80vh] overflow-y-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{links.map((link, index) => (
					<LinkSection
						key={index}
						title={link.title}
						items={link.items}
					/>
				))}
			</div>
		</div>
	);
};

export default WidgetLink;
