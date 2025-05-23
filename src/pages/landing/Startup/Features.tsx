import { Link } from 'react-router-dom'
import './../../../global.css'

//image
import desktop1 from '/assets/images/features/desktop1.gif'
import desktop from '/assets/images/hero/desktop.png'
import symbol from '/assets/images/application-imgs/symbol-bar.jpg'

const Features = () => {
	return (
		<section className="xl:py-1 py-1 overflow-x-hidden bg-gradient-to-br from-secondary to-primary/100 ">
			<div className="container">
				{/* <div>
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div className="order-2 lg:order-1">
							<span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
								Lorem Ipsum
							</span>
							<h1 className="text-3xl/tight font-medium mt-3 mb-4">
								Lorem ipsum dolor sit amet
							</h1>
							<p className="text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</p>
							<button className="mt-12 flex items-center">
								<Link
									to=""
									className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
								>
									Lorem ipsum <i className="fa-solid fa-arrow-right ms-2" />
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
				</div> */}
				<div className="xl:py-24 py-16">
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div>
							<img
								src={symbol}
								data-aos="fade-right"
								data-aos-duration={1500}
							/>
						</div>
						<div>
							<h2 className="heading-h2 mt-3 mb-4 text-center lg:text-start text-slate-100">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</h2>
							<p className="text-gray-100 text-center lg:text-start">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
								<br />
								<br />
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
								natus error sit voluptatem accusantium doloremque laudantium.
							</p>
							{/* <button className="mt-12 flex items-center">
								<Link
									to=""
									className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
								>
									Lorem ipsum <i className="fa-solid fa-arrow-right ms-2" />
								</Link>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
