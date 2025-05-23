import { Link } from 'react-router-dom'
import './../../global.css'

//image
import logoDark from '/assets/images/logo-dark.svg'

interface socialIcons {
	socialIcon?: boolean
}
const Footer2 = ({ socialIcon }: socialIcons) => {
	return (
		<footer className="w-full">
			<div className="py-16 bg-gradient-to-br from-primary to-secondary">
				<div className="container">
					<div className="grid lg:grid-cols-2 items-center">
						<div>
							<h2 className="heading-h2 mt-3 mb-2 text-slate-100">
								Ready to get started?
							</h2>
							<p className="text-gray-100">
								Create your free 14-day trial account now
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
							<Link
								to=""
								className="bg-blue-500 btn-primary hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-5 rounded-md text-center"
							>
								Open real account
							</Link>
							<Link
								to=""
								className="bg-gray-950 btn-primary hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-5 rounded-md text-center"
							>
								Demo account
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="border-b" /> */}
			<div className="px-16 bg-gradient-to-br from-primary to-secondary relative pt-10">
				<div className="grid lg:grid-cols-2 grid-cols-1 py-6">
					<div>
						<Link to="/">
							<img src={logoDark} className="h-8" />
						</Link>
						<p className="text-gray-100 mt-5 w-5/6">
							Make your web application stand out with high-quality landing page
						</p>
					</div>
					<div>
						<div className="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">
							<div>
								<div className="flex flex-col gap-3">
									<h5 className="mb-3 uppercase text-slate-100">PLATFORM</h5>
									<div className="text-gray-100">
										<Link to="">Demo</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Pricing</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Integrations</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Status</Link>
									</div>
								</div>
							</div>
							<div>
								<div className="flex flex-col gap-3">
									<h5 className="mb-3 uppercase text-slate-100">COMPANY</h5>
									<div className="text-gray-100">
										<Link to="">About us</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Career</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Contact Us</Link>
									</div>
								</div>
							</div>
							<div>
								<div className="flex flex-col gap-3">
									<h5 className="mb-3 uppercase text-slate-100">LEGAL</h5>
									<div className="text-gray-100">
										<Link to="">Usage Policy</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Privacy Policy</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Terms of Service</Link>
									</div>
									<div className="text-gray-100">
										<Link to="">Trust</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b" />
				<div
					className={`${
						socialIcon ? 'grid sm:grid-cols-2' : 'flex justify-around'
					} text-center sm:text-start gap-6 py-5`}
				>
					<p className="text-gray-100 text-sm">
						{new Date().getFullYear()}© Prompt. All rights reserved. Crafted by{' '}
						<Link to="" className="text-gray-100">
							Coderthemes
						</Link>
					</p>
					{socialIcon && (
						<div className="flex justify-center sm:justify-end gap-7">
							<div>
								<Link to="">
									<svg
										className="w-5 h-5 text-slate-100 hover:text-primary transition-all"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										{' '}
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>{' '}
									</svg>
								</Link>
							</div>
							<div>
								<Link to="">
									<svg
										className="w-5 h-5 text-slate-100 hover:text-primary transition-all"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										{' '}
										<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>{' '}
									</svg>
								</Link>
							</div>
							<div>
								<Link to="">
									<svg
										className="w-5 h-5 text-slate-100 hover:text-primary transition-all"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										{' '}
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>{' '}
										<rect x="2" y="9" width="4" height="12"></rect>{' '}
										<circle cx="4" cy="4" r="2"></circle>{' '}
									</svg>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</footer>
	)
}

export default Footer2
