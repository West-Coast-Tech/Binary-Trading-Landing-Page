import { Link } from 'react-router-dom'
import './../../../global.css'

//image
import desktop1 from '/assets/images/features/desktop1.gif'
import desktop from '/assets/images/hero/desktop.png'

const Practice = () => {
	return (
		<section className="xl:py-12 py-12 overflow-x-hidden bg-gradient-to-br from-primary to-secondary">
			<div className="container">
				<div>
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div className="order-2 lg:order-1">
							<h2 className="heading-h2 mt-3 mb-4 text-center lg:text-left text-slate-100">
								Aliqua ea eu nostrud id eu voluptate veniam qui excepteur esse
								sunt.
							</h2>
							<p className="text-gray-100 text-center lg:text-left">
								Enim esse anim nisi consectetur consectetur dolor. Tempor
								cupidatat sint in duis occaecat fugiat laboris aliqua. Labore
								velit et dolor magna. Sit proident magna non eu consequat
								ullamco excepteur aliquip magna deserunt ex cillum.
							</p>
							<button className="mt-12 flex items-center justify-self-center lg:justify-self-start">
								<Link
									to=""
									className="btn-primary bg-blue-500 rounded-md bg-green hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-5 px-12"
								>
									Demo Account <i className="fa-solid fa-arrow-right ms-2" />
								</Link>
							</button>
						</div>
						<div
							className="order-1 lg:order-2"
							data-aos="fade-left"
							data-aos-duration={1000}
						>
							<img src={desktop1} />
						</div>
					</div>
				</div>
				{/* <div className="xl:py-24 py-16">
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div>
							<img
								src={desktop}
								data-aos="fade-right"
								data-aos-duration={1500}
							/>
						</div>
						<div>
							<h1 className="text-3xl/tight font-medium mt-3 mb-4">
								We want everyone to be able to fulfill their desires and
								opportunities.
							</h1>
							<p className="text-gray-500">
								Our team has created not just another project for traders. First
								of all, we developed a platform for the widest possible
								audience. For people who want to learn how to use advanced
								financial instruments and develop their financial skills.
								<br />
								<br />
								Speaking of tools. QUOTEX provides over 400 free tools to each
								client so that you can trade and earn money the way you like.
								Choose any assets: currency quotes, stocks, majors, metals, oil
								or gas, as well as the main trend of recent years -
								cryptocurrencies.
							</p>
							    <button className="mt-12 flex items-center">
								<Link
									to=""
									className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
								>
									Learn more <i className="fa-solid fa-arrow-right ms-2" />
								</Link>
							</button> 
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}

export default Practice
