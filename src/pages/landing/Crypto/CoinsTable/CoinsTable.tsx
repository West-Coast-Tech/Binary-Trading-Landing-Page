import { HorizontalBar } from './HorizontalBar'

const data = [
	{
		instrument: 'EURUSD',
		name: 'Euro/US Dollar',
		icon1: 'https://flagcdn.com/h20/eu.png',
		icon2: 'https://flagcdn.com/h20/us.png',
		price: '$1.10',
		progress: '$1,100,000',
		type: 'Forex',
	},
	{
		instrument: 'GBPUSD',
		name: 'Pound Sterling/US Dollar',
		icon1: 'https://flagcdn.com/h20/gb.png',
		icon2: 'https://flagcdn.com/h20/us.png',
		price: '$1.20',
		progress: '$1,200,000',
		type: 'Forex',
	},
	{
		instrument: 'USDJPY',
		name: 'US Dollar/Japanese Yen',
		icon1: 'https://flagcdn.com/h20/us.png',
		icon2: 'https://flagcdn.com/h20/jp.png',
		price: '$130',
		progress: '$130,000,000',
		type: 'Forex',
	},
	{
		instrument: 'BTCUSD',
		icon1: 'https://cryptocurrencyliveprices.com/img/btc-bitcoin.png',
		icon2: 'https://flagcdn.com/h20/us.png',
		name: 'Bitcoin/US Dollar',
		price: '$30,000',
		progress: '$30,000,000',
		type: 'Crypto',
	},
	{
		instrument: 'ETHUSD',
		name: 'Ethereum/US Dollar',
		icon1: 'https://cryptocurrencyliveprices.com/img/eth-ethereum.png',
		icon2: 'https://flagcdn.com/h20/us.png',
		price: '$2,000',
		progress: '$2,000,000',
		type: 'Crypto',
	},
]

export const CoinsTable = () => {
	return (
		<div className="w-full bg-gradient-to-br from-secondary to-primary/100 relative">
			<div className="container relative w-full justify-center flex-col text-center pt-12 pb-20">
				<div className="pb-10">
					<h2 className="heading-h2 text-slate-100">Market Sentiment</h2>
					<p className="text-slate-100 mt-5 mb-4">
						Capitalize on every opportunity with the world’s most popular
						assets.
					</p>
				</div>
				<div className="w-full text-sm text-left  sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
					{/* Header Row */}
					<div className=" grid md:grid-cols-3 grid-cols-2 border-b-[1px] border-gray-400/50 text-normal font-bold tracking-wider uppercase text-gray-400 ">
						<div className="px-6 py-3">Instruments</div>
						<div className="pr-6 py-3 text-center ">Order Ratio</div>
						<div className="px-6 py-3 hidden md:block text-right"></div>
					</div>

					{/* Data Rows */}
					{(data || []).map((item, idx) => (
						<div
							key={idx}
							className="grid md:grid-cols-3 grid-cols-2 border-b-[1px] border-gray-400/50 text-base"
						>
							{/* Instruments cell */}
							<div className="pl-6 py-4 flex flex-row gap-4">
								<div className="flex flex-row items-center sm:items-end">
									<img
										src={item.icon1}
										alt={item.instrument}
										className="w-6 h-6 mb-4 -mr-3 bg-white rounded-full object-cover "
									/>
									<img
										src={item.icon2}
										alt={item.instrument}
										className="w-6 h-6 rounded-full bg-white  object-cover"
									/>
								</div>

								<div>
									<h3 className="heading-h3 text-white">{item.instrument}</h3>
									<p className="text-gray-400 sm:block hidden text-sm">
										{item.name}
									</p>
								</div>
							</div>

							{/* Order Ratio cell */}
							<div className=" py-4 flex flex-row items-center justify-end relative ">
								<HorizontalBar />
							</div>

							{/* Type cell (hidden on small screens) */}
							<div className="px-6 py-4 hidden md:block text-right text-gray-400">
								{item.type}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
