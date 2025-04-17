// types
import { Feature } from './types'
import './../../../global.css'

//images
import whiteWave from '/assets/images/shapes/white-wave.svg'

type FeaturesProps = {
	features: Feature[]
}

const Features = ({ features }: FeaturesProps) => {
	return (
		<section className="py-20  bg-gradient-to-br from-secondary to-primary/100 relative">
			<div className="container relative">
				<div className="text-center">
					<h2 className="text-green-50 heading-h2 text-5xl ">
						Features of the platform
					</h2>
					<p className="text-grey-100 mt-5 mb-4 text-2xl ">
						Sunt qui dolor laboris qui voluptate culpa magna culpa cillum
						laborum enim.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
					{(features || []).map((feature, idx) => {
						return (
							<div
								key={idx}
								className="flex flex-col p-5 items-center gap-5 bg-stone-100 shadow-lg  rounded-md shadow-blue-900 justify-start"
							>
								<div>
									<div className="w-12 h-12 flex items-center justify-center rounded-md">
										{feature.icon}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<h3 className="heading-h3">{feature.title}</h3>
									<p className="text-gray-900 mt-3">{feature.description}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Features
