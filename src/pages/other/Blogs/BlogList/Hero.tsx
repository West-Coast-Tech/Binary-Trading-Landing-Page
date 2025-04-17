const Hero = () => {
	return (
		<section className="pt-36 pb-20">
			<div className="container">
				<div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero.png')]">
					<div className="relative w-full h-full z-30 bg-black/10" />
				</div>
				<div className="relative lg:w-3/5 mx-auto z-30">
					<div className="text-center">
						<h1 className="text-3xl font-medium text-slate-800">
							Lorem Ipsum Blog
						</h1>
						<p className="text-slate-400 mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
