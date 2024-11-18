"use client";
import dynamic from "next/dynamic";
import CustomLoading from "./CustomLoading";

const MarketOverview = dynamic(
	() => import("react-ts-tradingview-widgets").then((w) => w.MarketOverview),
	{
		ssr: false,
		loading: () => <CustomLoading />,
	},
);

const MarketOverviewWidget = () => {
	const tabsValue = [
		{
			title: "Forex",
			symbols: [
				{ s: "FX:EURUSD", d: "Euro / US Dollar" },
				{ s: "FX:GBPUSD", d: "British Pound / US Dollar" },
				{ s: "FX:USDJPY", d: "US Dollar / Japanese Yen" },
				{ s: "FX:USDCHF", d: "US Dollar / Swiss Franc" },
				{ s: "FX:AUDUSD", d: "Australian Dollar / US Dollar" },
				{ s: "FX:USDCAD", d: "US Dollar / Canadian Dollar" },
				{ s: "FX:NZDUSD", d: "New Zealand Dollar / US Dollar" },
				{ s: "FX:USDHKD", d: "US Dollar / Hong Kong Dollar" },
			],
			originalTitle: "Forex",
		},
		{
			title: "Indices",
			symbols: [
				{ s: "FOREXCOM:SPXUSD", d: "S&P 500" },
				{ s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
				{ s: "FOREXCOM:DJI", d: "Dow 30" },
				{ s: "INDEX:NKY", d: "Nikkei 225" },
				{ s: "INDEX:DEU30", d: "DAX Index" },
				{ s: "FOREXCOM:UKXGBP", d: "UK 100" },
				{ s: "INDEX:HSI", d: "Hang Seng Index" },
				{ s: "INDEX:CAC", d: "CAC 40" },
			],
			originalTitle: "Indices",
		},
		{
			title: "Commodities",
			symbols: [
				{ s: "CME_MINI:ES1!", d: "S&P 500" },
				{ s: "CME:6E1!", d: "Euro" },
				{ s: "COMEX:GC1!", d: "Gold" },
				{ s: "NYMEX:CL1!", d: "Crude Oil" },
				{ s: "NYMEX:NG1!", d: "Natural Gas" },
				{ s: "CBOT:ZC1!", d: "Corn" },
				{ s: "CBOT:ZW1!", d: "Wheat" },
				{ s: "NYMEX:RB1!", d: "Gasoline" },
			],
			originalTitle: "Commodities",
		},
		{
			title: "Shares",
			symbols: [
				{ s: "NASDAQ:AAPL", d: "Apple" },
				{ s: "NASDAQ:GOOGL", d: "Google" },
				{ s: "NASDAQ:AMZN", d: "Amazon" },
				{ s: "NYSE:BABA", d: "Alibaba" },
				{ s: "NYSE:DIS", d: "Disney" },
				{ s: "NYSE:BRK.B", d: "Berkshire Hathaway" },
				{ s: "NYSE:JPM", d: "JP Morgan" },
				{ s: "NYSE:V", d: "Visa" },
			],
			originalTitle: "Shares",
		},
		{
			title: "Cryptocurrency",
			symbols: [
				{ s: "COINBASE:BTCUSD", d: "Bitcoin" },
				{ s: "COINBASE:ETHUSD", d: "Ethereum" },
				{ s: "COINBASE:LTCUSD", d: "Litecoin" },
				{ s: "COINBASE:BCHUSD", d: "Bitcoin Cash" },
				{ s: "COINBASE:ADAUSD", d: "Cardano" },
				{ s: "COINBASE:XRPUSD", d: "Ripple" },
			],
			originalTitle: "Crypto",
		},
	];

	return (
		<div className="w-full">
			<div className="flex flex-wrap justify-between items-center px-4 md:px-6">
				<h2 className="text-lg font-bold">Instruments Overview</h2>
				<p className="bg-white text-gray-3 rounded-full px-4 md:px-6 py-2 border font-medium text-sm">
					Monthly
				</p>
			</div>

			<div className="w-full bg-white rounded-xl p-4 md:p-5 mt-4">
				{/* Market Overview Widget */}
				<MarketOverview
					colorTheme="light"
					isTransparent
					width="100%"
					height={400}
					tabs={tabsValue}
					showChart={false}
					dateRange="1M"
				/>
			</div>
		</div>
	);
};

export default MarketOverviewWidget;
