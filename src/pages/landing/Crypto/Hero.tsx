import { FormInput } from '@/components'
import { Link } from 'react-router-dom'
import './../../../global.css'
import Typist from 'react-text-typist'

// Images and videos
import home from '/assets/images/application-imgs/trinomo-platform-fixed.png'
import main from '/assets/video/main_bg.mp4'

const cards = [
	{
		title: '24/7',
		title2: 'OTC Trading',
		description: 'Lorem Ipsum Lorem',
		icon: (
			<svg
				className="w-10 h-10 mb-2 text-[#00C853]"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<rect
						id="Combined-Shape"
						fill="currentcolor"
						opacity="1"
						x={2}
						y={5}
						width={20}
						height={14}
						rx={2}
					/>{' '}
					<rect
						id="Rectangle-59"
						fill="white"
						opacity="1"
						x={2}
						y={8}
						width={20}
						height={3}
					/>{' '}
					<rect
						id="Rectangle-59-Copy"
						fill="white"
						opacity="0.8"
						x={16}
						y={14}
						width={4}
						height={2}
						rx={1}
					/>{' '}
				</g>{' '}
			</svg>
		),
	},
	{
		title: '100+ Trading Assets',
		description:
			'Explore a wide range of markets including forex, crypto, and more.',
		icon: (
			<svg
				className="w-10 h-10 mb-2 text-[#00C853]"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<rect
						id="Combined-Shape"
						fill="currentcolor"
						opacity="1"
						x={2}
						y={5}
						width={20}
						height={14}
						rx={2}
					/>{' '}
					<rect
						id="Rectangle-59"
						fill="white"
						opacity="1"
						x={2}
						y={8}
						width={20}
						height={3}
					/>{' '}
					<rect
						id="Rectangle-59-Copy"
						fill="white"
						opacity="0.8"
						x={16}
						y={14}
						width={4}
						height={2}
						rx={1}
					/>{' '}
				</g>{' '}
			</svg>
		),
	},
	{
		title: 'Highest Payouts',
		description: 'Earn up to 90% returns on successful predictions.',
		icon: (
			<svg
				className="w-10 h-10 mb-2 text-[#00C853]"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<rect
						id="Combined-Shape"
						fill="currentcolor"
						opacity="1"
						x={2}
						y={5}
						width={20}
						height={14}
						rx={2}
					/>{' '}
					<rect
						id="Rectangle-59"
						fill="white"
						opacity="1"
						x={2}
						y={8}
						width={20}
						height={3}
					/>{' '}
					<rect
						id="Rectangle-59-Copy"
						fill="white"
						opacity="0.8"
						x={16}
						y={14}
						width={4}
						height={2}
						rx={1}
					/>{' '}
				</g>{' '}
			</svg>
		),
	},
	{
		title: 'No Hidden Fees',
		description:
			'Keep more of your profits with transparent, zero-fee trading.',
		icon: (
			<svg
				className="w-10 h-10 mb-2 text-[#00C853]"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<rect
						id="Combined-Shape"
						fill="currentcolor"
						opacity="1"
						x={2}
						y={5}
						width={20}
						height={14}
						rx={2}
					/>{' '}
					<rect
						id="Rectangle-59"
						fill="white"
						opacity="1"
						x={2}
						y={8}
						width={20}
						height={3}
					/>{' '}
					<rect
						id="Rectangle-59-Copy"
						fill="white"
						opacity="0.8"
						x={16}
						y={14}
						width={4}
						height={2}
						rx={1}
					/>{' '}
				</g>{' '}
			</svg>
		),
	},
]

const Hero = () => {
	return (
		<section className="pt-24 lg:pt-40 pb-20 relative overflow-hidden w-full">
			{/* Background video */}
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
				src={main}
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="relative w-full justify-center z-10 flex flex-col gap-8 container">
				<div className="flex flex-col justify-center text-center gap-8 items-center w-full ">
					<h1 className="heading-h1  font-semibold text-slate-100">
						Trinomo: Win Big, Trade Easy
					</h1>
					<p className="text-slate-100 text-lg/relaxed">
						Lightning Fast Binary Trading With Real Time Payouts and Powerful
						Tools.
					</p>
					<div className="flex flex-row items-center gap-16 justify-center sm:px-4 ">
						<Link
							to="https://options.trinomo.com/register"
							target="_blank"
							rel="noopener noreferrer"
							className="py-3 px-3 sm:px-8 text-nowrap text-sm sm:text-base md:text-lg rounded bg-blue-500 hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
						>
							Try now for free
						</Link>
						<small className="text-center pr-2 sm:pr-5 text-xs sm:text-sm md:text-base text-nowrap">
							*Get upto 30% Bonus
						</small>
					</div>
				</div>
				<div className="relative flex justify-center ">
					{/* Uncomment and use image if needed */}
					<img
						className="w-[130vh]"
						data-aos="fade-up"
						data-aos-duration={300}
						src={home}
						alt="Home"
					/>
					{/* <video src={video} autoPlay loop muted className="w-full" /> */}

					<div className="hidden lg:block">
						<div className="after:w-32 after:h-32 after:absolute after:-bottom-10 after:-start-12 after:-z-10 after:bg-[url('/assets/images/pattern/dot2.svg')]" />
					</div>
				</div>

				{/* <div className="flex flex-col w-full items-center mb:pt-7 pb-12">
					<div className="w-[80%] border-solid border-t-[1px] border-gray-500/40"></div>
					<div className="text-start mt-4 grid grid-cols-2 xl:grid-cols-4 justify-start  md:gap-24 gap-4 font-bold">
						{(cards || []).map((card, idx) => {
							return (
								<div
									key={idx}
									className="border-[1px] border-solid border-[#278E71] rounded-lg pt-4 pb-4 px-4 items-center flex flex-col text-center"
								>
									{card.icon}
									<p className="text-sm font-bold">
										{card.title} <br />
										{card.title2}
										<p className="pt-3">{card.description}</p>
									</p>
								</div>
							)
						})}
					</div>
				</div> */}
				{/* <div className="flex flex-row items-center gap-4 justify-center sm:px-4 ">
					<Link
						to=""
						className="py-3 px-3 sm:px-8 text-nowrap text-sm sm:text-base md:text-lg rounded bg-blue-500 hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
					>
						Try now for free
					</Link>
					<small className="text-center pr-2 sm:pr-5 text-xs sm:text-sm md:text-base text-nowrap">
						*Get upto 30% Bonus
					</small>
				</div> */}
			</div>
		</section>
	)
}

export default Hero
