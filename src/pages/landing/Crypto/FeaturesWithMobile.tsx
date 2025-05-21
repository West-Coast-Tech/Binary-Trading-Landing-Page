import React from 'react'
import { Feature } from './types'
import image from '/assets/images/application-imgs/mobile-platform-option-2.png'
type FeaturesWithMobileProps = {
	features: Feature[]
}

export const FeaturesWithMobile = ({ features }: FeaturesWithMobileProps) => {
	const featuresWithMobile = features.slice(0, 3)
	const featuresWithMobile2 = features.slice(3, 6)
	return (
		<section className=" py-10 md:py-20  bg-gradient-to-br from-secondary to-primary/100  relative">
			<div className=" container relative">
				<div className="text-center">
					<h2 className="text-green-50 heading-h2 ">
						Powerful Features. Simple Experience
					</h2>
					<p className="text-grey-100 mt-5 mb-4">
						From fast withdrawals to 24/7 support, Trinomo delivers unmatched
						trading features.
					</p>
				</div>
				<div className="flex flex-col md:flex-row  md:gap-0 lg:gap-5 justify-center mt-8 w-full  ">
					<div className="flex flex-col gap-6 col-span-1 md:pb-0 pb-6">
						{(featuresWithMobile || []).map((feature, idx) => {
							return (
								<div
									key={idx}
									className="flex flex-col p-5 items-center gap-5  justify-center md:border-solid border-b-[1px] border-blue-900/40"
								>
									<div>
										<div className="w-12 h-12 flex items-center justify-center rounded-md">
											{feature.icon}
										</div>
									</div>
									<div className="flex flex-col items-center text-center">
										<h3 className="text-2xl font-bold">{feature.title}</h3>
										<p className="text-gray-400 mt-3">{feature.description}</p>
									</div>
								</div>
							)
						})}
					</div>
					<div className="flex justify-center">
						<img src={image} className="sm:min-w-[19rem] w-[17rem]" />
					</div>
					<div className="flex flex-col gap-6 col-span-1 md:pb-0 pb-6">
						{(featuresWithMobile2 || []).map((feature, idx) => {
							return (
								<div
									key={idx}
									className="flex flex-col p-5 items-center gap-5  justify-center  md:border-solid border-b-[1px] border-blue-900/40"
								>
									<div>
										<div className="w-12 h-12 flex items-center justify-center rounded-md">
											{feature.icon}
										</div>
									</div>
									<div className="flex flex-col items-center text-center">
										<h3 className="text-2xl font-bold">{feature.title}</h3>
										<p className="text-gray-400 mt-3">{feature.description}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
