import { Link } from 'react-router-dom'
import './../../../global.css'

//iamges
import blog1 from '/assets/images/blog/blog-1.png'
import blog2 from '/assets/images/blog/blog-2.png'
import blog3 from '/assets/images/blog/blog-3.png'

const Blog = () => {
	return (
		<section className="py-20 bg-secondary">
			<div className="container">
				<div className="text-center">
					<h2 className="heading-h2 my-3 text-slate-100">Lorem Ipsum</h2>
					<p className="text-slate-100 mt-5 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
					<div>
						<div
							className="relative"
							data-aos="fade-up"
							data-aos-duration={300}
						>
							<span
								className="absolute top-3 bg-orange-500 p-1 pe-6 text-sm font-semibold text-white"
								style={{
									clipPath:
										'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
								}}
							>
								Lorem Ipsum
							</span>
							<img src={blog1} className="rounded-md" />
						</div>
						<p className="text-slate-100 mt-5">Lorem Ipsum . Lorem Ipsum</p>
						<h3 className="mt-1 heading-h3 text-slate-100">
							<Link to="">
								Lorem ipsum dolor sit amet, consectetur adipiscing
							</Link>
						</h3>
					</div>
					<div>
						<div
							className="relative"
							data-aos="fade-up"
							data-aos-duration={600}
						>
							<span
								className="absolute top-3 bg-red-500 p-1 pe-6 text-sm font-semibold text-white"
								style={{
									clipPath:
										'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
								}}
							>
								Lorem Ipsum
							</span>
							<img src={blog3} className="rounded-md" />
						</div>
						<p className="text-slate-100 mt-5">Lorem Ipsum . Lorem Ipsum</p>
						<h3 className="mt-1 heading-h3 text-slate-100">
							<Link to="">
								Lorem ipsum dolor sit amet, consectetur adipiscing
							</Link>
						</h3>
					</div>
					<div>
						<div
							className="relative"
							data-aos="fade-up"
							data-aos-duration={300}
						>
							<span
								className="absolute top-3 bg-blue-500 p-1 pe-6 text-sm font-semibold text-white"
								style={{
									clipPath:
										'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
								}}
							>
								Lorem Ipsum
							</span>
							<img src={blog2} className="rounded-md" />
						</div>
						<p className="text-slate-100 mt-5">Lorem Ipsum . Lorem Ipsum</p>
						<h3 className="mt-1 heading-h3 text-slate-100">
							<Link to="">
								Lorem ipsum dolor sit amet, consectetur adipiscing
							</Link>
						</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blog
