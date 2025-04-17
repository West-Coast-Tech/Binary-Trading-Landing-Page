import React from 'react'
const content = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
