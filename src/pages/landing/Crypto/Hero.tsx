import { FormInput } from '@/components'
import { Link } from 'react-router-dom'
import './../../../global.css'
import Typist from 'react-text-typist'

// Images and videos
import home from '@/assets/images/application-imgs/home.jpg'
import video from '@/assets/video/platform-demo.webm'
import main from '@/assets/video/main_bg.mp4'

const Hero = () => {
	return (
		<section className="pt-36 lg:pt-60 pb-20 relative overflow-hidden">
			{/* Background video */}
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
				src={main}
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="container relative z-10">
				<div className="flex flex-col justify-center gap-10 items-center">
					<div>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4 sm:px-10 lg:text-left mb-7">
							Innovative&nbsp;
							<span className="relative md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
								platform
							</span>{' '}
							for <br />
							smart investments&nbsp;
						</h1>
						<p className="text-gray-100 leading-7 text-center lg:text-left px-4 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl lg:text-2xl">
							Sign up and get 10,000 USD to your demo account to learn how to
							trade.
						</p>
						<div className="py-10">
							<div className="flex flex-wrap items-center gap-4 justify-center lg:justify-stretch px-4 sm:px-20">
								<Link
									to=""
									className="py-3 sm:py-5 px-6 sm:px-8 text-sm sm:text-base md:text-lg rounded bg-blue-500 hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
								>
									Create a free account
								</Link>
								<small className="text-center pr-2 sm:pr-5 text-xs sm:text-sm md:text-base">
									*The minimum deposit amount to start real
									<br className="block sm:hidden" />
									trading is 10 USD
								</small>
							</div>
						</div>
					</div>
					<div className="2xl:w-[130%] relative lg:ml-20 w-full">
						<div className="p-3 rounded-md w-full">
							{/* Uncomment and use image if needed */}
							{/* <img
                className="group"
                data-aos="fade-right"
                data-aos-duration={300}
                src={home}
                alt="Home"
              /> */}
							<video src={video} autoPlay loop muted className="w-full" />
						</div>
						<div className="hidden lg:block">
							<div className="after:w-32 after:h-32 after:absolute after:-bottom-10 after:-start-12 after:-z-10 after:bg-[url('@/assets/images/pattern/dot2.svg')]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
