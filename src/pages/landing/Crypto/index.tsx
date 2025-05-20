import { Footer } from '@/components'
import Blog from './Blog'
import Coins from './Coins'
import Features from './Features'
import Hero from './Hero'
import Integration from './Integration'
import Stats from './Stats'
import { coins, features } from './data'
import FAQs from '@/pages/other/Pricing/FAQs'
import { FeaturesWithMobile } from './FeaturesWithMobile'
import { CoinsTable } from './CoinsTable/CoinsTable'

const Crypto = () => {
	return (
		<>
			<Hero />
			<FeaturesWithMobile features={features} />
			{/* <Features features={features} /> */}

			<Integration />

			{/* <Blog /> */}

			{/* <Coins coins={coins} /> */}
			<CoinsTable />
			{/* <Stats /> */}
			<FAQs />
			<Footer />
		</>
	)
}

export default Crypto
