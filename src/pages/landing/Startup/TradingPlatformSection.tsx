import React from 'react'
const content = [
	'The main advantage of QUOTEX is its premium quality in everything and there are no exceptions. Transparency of the platform, advanced technologies, attractive conditions for participants - all this makes us unique.',
	'Thanks to cooperation with reliable brokers, we have achieved maximum control over quotations by the client. You can always check all the indicators in person!',
	'Working to create a comfortable environment for all users of the platform, we have implemented the best functionality in terms of financial management. The lightning-fast speed of updating quotes and the interface is what creates comfort of working with the platform.',
	'Our support service deserves special attention. Each support staff member is a fan of his job. 24/7 lightning-fast feedback and a sincere desire to help—that is why we are ahead of alternative platforms. We are doing everything for your comfortable pastime.',
]
const TradingPlatformSection = () => {
	return (
		<section className="bg-gradient-to-br from-primary to-primary/70 relative text-white py-20">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">
					A modern platform for modern people
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{content.map((item, index) => (
						<div
							key={index}
							// className="group"
							data-aos="fade-down"
							data-aos-duration={300}
							className="p-4 flex items-center mx-5 lg:mx-0 px-12 py-6 gap-6 h-full bg-gradient-to-br from-[#003] via-gray-100/10 to-[#003] rounded-md shadow-gray-900/90  shadow-lg group-hover:shadow-lg transition-all duration-300 min-height"
						>
							<p className="text-gray-300">{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TradingPlatformSection
