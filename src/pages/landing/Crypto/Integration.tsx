import { Link } from 'react-router-dom'
import whiteWave from '/assets/images/shapes/white-wave.svg'
import './../../../global.css'

//image
import code from '/assets/images/other/code.jpg'

const Integration = () => {
	return (
		<section className="py-24 bg-primary/100 relative">
			{/* <div className="absolute top-0 inset-x-0 hidden sm:block ">
				<img src={whiteWave} alt="svg" className="w-full -scale-x-100 " />
			</div> */}
			<div className="container">
				<div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
					<div className="lg:me-20 text-center lg:text-start">
						<h2 className="heading-h2 my-3 text-slate-100">
							Eiusmod reprehenderit amet ad reprehenderit veniam do exercitation
							quis veniam quis proident qui laboris anim.{' '}
						</h2>
						<p className="text-slate-100 mt-5 mb-4">
							In dolor incididunt mollit magna do ex laborum sit Lorem quis.
						</p>
						<div className="flex flex-wrap items-center gap-5 mt-12 justify-center lg:justify-start">
							<Link
								to=""
								className="py-5 px-4 btn-primary rounded bg-blue-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-500"
							>
								Nostrud cillum consectetur velit irure.
							</Link>
							<p>
								Adipisicing veniam deserunt amet eu mollit nulla laborum eu.
							</p>
						</div>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
						<div className="bg-white flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">🎯</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">
									1. Lorem ipsum dolor sit amet
								</h3>
							</div>
						</div>
						<div className="bg-white flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">📊</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">
									2. Nostrud cillum consectetur velit
								</h3>
							</div>
						</div>
						<div className="bg-white flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">💸</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">
									3. Consectetur adipiscing elit
								</h3>
							</div>
						</div>
						<div className="bg-white flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">✅</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">
									4. Sed do eiusmod tempor incididunt
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Integration
