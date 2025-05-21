import { Link } from 'react-router-dom'
import whiteWave from '/assets/images/shapes/white-wave.svg'
import './../../../global.css'
import step1 from '/assets/images/IntegrationComponent/step-1.png'
import step2 from '/assets/images/IntegrationComponent/step-2.png'
import step3 from '/assets/images/IntegrationComponent/step-3.png'
//image
import code from '/assets/images/other/code.jpg'

const Integration = () => {
	return (
		<section className="md:py-24 py-12 bg-primary/100 relative">
			{/* <div className="absolute top-0 inset-x-0 hidden sm:block ">
				<img src={whiteWave} alt="svg" className="w-full -scale-x-100 " />
			</div> */}
			<div className="container">
				<div className="flex flex-col items-center gap-6">
					<div className="lg:me-20 text-center">
						<h2 className="heading-h2 my-3 text-slate-100">
							Getting Started is Simple
						</h2>
						<p className="text-slate-100 mt-5 mb-4">
							Start Trading in Minutes with Trinomo’s Lightning-Fast Setup
						</p>
					</div>
					<div className=" flex flex-col lg:flex-row gap-6 xl:gap-10">
						{/* <div className="bg-white flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">🎯</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">
									1. Lorem ipsum dolor sit amet
								</h3>
							</div>
						</div> */}
						<div className="bg-secondary relative  flex flex-col items-center py-12 w-80 rounded-lg gap-5 shadow-md px-5">
							<img src={step1} className="w-9" />

							<div className="mt-2 flex justify-center items-center flex-col">
								<h3 className="text-center text-xl border-b-[1px] border-gray-500 w-fit pb-2 ">
									Sign Up
								</h3>
								{/* <div className="border-b-[1px] border-gray-500 w-1/3 pb-2"></div> */}
								<p className="text-center text-sm text-gray-400 pt-2  ">
									Create your free account in seconds without any hassle.
								</p>
							</div>
						</div>
						<div className="bg-secondary relative  flex flex-col items-center py-12 w-80 rounded-lg gap-5 shadow-md px-5">
							<img src={step2} className="w-9" />
							<div className="mt-2 flex justify-center items-center flex-col">
								<h3 className="text-center text-xl border-b-[1px] border-gray-500 w-fit pb-2">
									Fund Account
								</h3>
								<p className="text-center text-sm text-gray-400 pt-2 ">
									Deposit securely using your preferred payment method.
								</p>
							</div>
						</div>
						<div className="bg-secondary relative  flex flex-col items-center py-12 w-80 rounded-lg gap-5 shadow-md px-5">
							<img src={step3} className="w-9" />
							<div className="mt-2 flex justify-center items-center flex-col">
								<h3 className="text-center text-xl border-b-[1px] border-gray-500 w-fit pb-2">
									Start Trading
								</h3>
								<p className="text-center text-sm text-gray-400 pt-2  ">
									Pick a market, make your move, and trade instantly.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-5 mt-12 justify-center ">
						{/* make sure it opens in a new tab */}
						<Link
							to="https://options.trinomo.com/register"
							target="_blank"
							rel="noopener noreferrer"
							className="py-5 px-4 btn-primary rounded bg-blue-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-500"
						>
							Register Now <i className="fa-solid fa-arrow-right ms-2" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Integration
