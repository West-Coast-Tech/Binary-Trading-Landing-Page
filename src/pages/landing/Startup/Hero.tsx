import { Link } from 'react-router-dom'
import './../../../global.css'

//images
import startup1 from '/assets/images/hero/startup1.svg'
import whiteWave from '/assets/images/shapes/white-wave.svg'

const Hero = () => {
	return (
		<section className="bg-gradient-to-br from-primary to-secondary relative">
			<section className="relative pt-44 pb-40">
				<div className="container">
					<div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
						<div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
							<h1 className="lg:text-5xl/tight text-3xl font-semibold mb-5 text-slate-100">
								Lorem ipsum dolor sit amet
							</h1>
							<p className="text-slate-100 text-lg/relaxed mb-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
								tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
							</p>
						</div>
						<div
							className="lg:col-span-4 order-1 lg:order-2"
							data-aos="fade-left"
							data-aos-duration={1000}
						>
							<div>
								<img
									src={startup1}
									alt="startup1-img"
									data-aos="fade-left"
									data-aos-duration={1000}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="absolute bottom-0 inset-x-0 hidden sm:block">
				<img
					src={whiteWave}
					alt="svg"
					className="w-full -scale-x-100 -scale-y-100"
				/>
			</div>
		</section>
	)
}

export default Hero
