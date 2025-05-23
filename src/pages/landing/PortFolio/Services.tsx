// types
import { Service } from './types'
import './../../../global.css'

type ServicesProps = {
	services: Service[]
}

const Services = ({ services }: ServicesProps) => {
	return (
		<section className="py-12 bg-gradient-to-br from-primary to-secondary">
			<div className="container">
				<div>
					<h2 className="heading-h2 mb-5 text-center lg:text-left text-slate-100">
						Lorem ipsum dolor sit amet
					</h2>
					<p className="text-slate-400 font-medium text-center lg:text-left">
						Consectetur adipiscing elit
					</p>
				</div>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
					{(services || []).map((service, idx) => {
						return (
							<div key={idx}>
								<div className="p-4 h-full bg-gradient-to-br from-black via-gray-100/10 to-black rounded-md shadow group-hover:shadow-lg transition-all duration-300 min-height">
									<div className="w-full">
										<img src={`${service.icon}`} alt={`${service.title}`} />
									</div>
									<h3 className="heading-h3 mt-6 text-center lg:text-left text-slate-100">
										Lorem ipsum
									</h3>
									<p className="text-base text-slate-100 leading-7 mt-2 text-center lg:text-left">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer nec odio. Praesent libero. Sed cursus ante dapibus
										diam.
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Services
