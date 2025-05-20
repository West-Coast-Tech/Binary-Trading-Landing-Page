import { HorizontalBar } from './HorizontalBar'

const data = [
	{
		instrument: 'BTC-USD',
		price: '$30,000',
		progress: '$30,000,000',
		type: 'Crypto',
	},
	{
		instrument: 'ETH-USD',
		price: '$2,000',
		progress: '$2,000,000',
		type: 'Crypto',
	},

	{
		instrument: 'EUR-USD',
		price: '$1.10',
		progress: '$1,100,000',
		type: 'Forex',
	},
	{
		instrument: 'GBP-USD',
		price: '$1.20',
		progress: '$1,200,000',
		type: 'Forex',
	},
	{
		instrument: 'USD-JPY',
		price: '$130',
		progress: '$130,000,000',
		type: 'Forex',
	},
]

export const CoinsTable = () => {
	return (
		<div className="w-full bg-gradient-to-tl from-secondary to-primary/100 relative">
			<div className="container relative w-full justify-center flex-col text-center py-12 ">
				<div className="pb-10">
					<h2 className="heading-h2 text-slate-100">
						Trade assets from global markets.
					</h2>
					<p className="text-slate-100 mt-5 mb-4">
						Capitalize on every opportunity with the world’s most popular
						assets.
					</p>
				</div>
				<table className="w-full text-sm text-left py-12">
					<thead className="text-[0.6rem]  uppercase border-b-[1px] border-solid border-gray-400/50  text-gray-400 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Instruments
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Progress
							</th>
							<th scope="col" className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody>
						{(data || []).map((item, idx) => {
							return (
								<tr
									key={idx}
									className="border-b-[1px] border-solid border-gray-400/50 text-base"
								>
									<th scope="row" className="px-6 py-4 font-medium">
										{item.instrument}
									</th>
									<td className="px-6 py-4">{item.price}</td>
									<td className="px-6 py-4">
										<HorizontalBar />
									</td>
									<td className="px-6 py-4">{item.type}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
