import { FeedBack, Footer2 } from '@/components'
import Features from './Features'
import Hero from './Hero'
import Services from '../PortFolio/Services'
import { services } from '../PortFolio/data'
import Practice from './practice'
import MoreFeatures from './MoreFeatures'
import TradingPlatformSection from './TradingPlatformSection'

const Startup = () => {
	return (
		<div className="text-gray-700">
			<Hero />

			<Features />

			<Services services={services} />

			<FeedBack />

			<TradingPlatformSection />

			<Practice />

			<MoreFeatures />

			{/* <Pricing planFeatures={planFeatures} /> */}

			{/* <ClientsReview /> */}

			{/* <Integrations integrations={integrations} /> */}

			<Footer2 socialIcon />
		</div>
	)
}

export default Startup
