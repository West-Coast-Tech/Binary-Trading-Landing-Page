import { Link } from 'react-router-dom'
import './../../../global.css'

const MoreFeatures = () => {
	return (
		<>
			<section className="overflow-hidden bg-gradient-to-br from-secondary to-primary/100">
				<div className="xl:py-16 py-12 mt-8">
					<div className="container" data-aos="fade-up" data-aos-duration="600">
						<div className="text-center">
							<h2 className="heading-h2 text-slate-100">
								Lorem ipsum dolor sit amet
							</h2>
						</div>

						<div className="py-16">
							<div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
								<div className="order-1">
									<div className="flex flex-col gap-5 text-slate-100">
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Lorem ipsum dolor
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Sit amet consectetur
										</p>
									</div>
								</div>

								<div className="order-3 xl:order-2 text-slate-100">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Adipiscing elit
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Integer nec odio
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Praesent libero
										</p>
									</div>
								</div>

								<div className="order-4 xl:order-3 text-slate-100">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Sed cursus ante
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Dapibus diam
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Nulla quis sem
										</p>
									</div>
								</div>

								<div className="order-2 xl:order-4 text-slate-100">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Nibh elementum
										</p>
										<p className="flex items-center gap-3">
											<i className="fa-solid fa-check text-blue-500 text-xl"></i>
											Ullamcorper suscipit
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Uncomment and adjust if needed */}
						{/* <button className="flex items-center justify-center mx-auto">
							<Link
								to=""
								className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
							>
								Lorem Ipsum <i className="fa-solid fa-arrow-right ms-2"></i>
							</Link>
						</button> */}
					</div>
				</div>
			</section>
		</>
	)
}

export default MoreFeatures
