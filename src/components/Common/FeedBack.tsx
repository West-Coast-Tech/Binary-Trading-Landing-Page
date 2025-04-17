import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import avatar1 from '/assets/images/avatars/img-1.jpg'
import avatar2 from '/assets/images/avatars/img-2.jpg'
import avatar3 from '/assets/images/avatars/img-3.jpg'

import google from '/assets/images/brands/google.svg'
import amazon from '/assets/images/brands/amazon.svg'
import lenovo from '/assets/images/brands/lenovo.svg'
import './../../global.css'

interface SlideProps {
	image: string
	logo?: string
}
const CommonSlide1 = ({ image, logo }: SlideProps) => {
	return (
		<>
			<i className="fa-solid fa-quote-left text-gray-500 text-5xl"></i>
			<p className="my-4">
				It is one of the very convenient to use project manager ever! I have
				tried many project management apps for my daily tasks, but this one is
				far better than others. Simply loved it!
			</p>
			<div className="border-b border-gray-200 w-full my-7"></div>

			<div className="flex flex-wrap items-center justify-between gap-10">
				<div className="flex items-center gap-2">
					<img src={image} className="h-10 w-10 rounded-full" />
					<div>
						<h1 className="text-sm mb-1">Cersei Lannister</h1>
						<p className="text-gray-500 text-xs">Senior Project Manager</p>
					</div>
				</div>
				<div>
					<img src={logo} className="w-24" />
				</div>
			</div>
		</>
	)
}
const FeedBack = () => {
	return (
		<section className="py-14 sm:py-28 overflow-x-hidden bg-gradient-to-br from-secondary to-primary/100 ">
			<div className="container">
				<div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
					<div className="col-span-3 lg:col-span-1 justify-items-center lg:justify-items-start">
						<span className="text-sm font-medium py-1 px-3 rounded-full text-slate-100">
							Binary
						</span>
						<h2 className="heading-h2 mt-3 mb-4 text-slate-100">
							Tempor nisi officia amet incididunt.{' '}
						</h2>
						<p className="text-gray-100">
							Id do culpa adipisicing anim laborum in cillum deserunt Lorem ut
							Lorem.{' '}
						</p>

						{/* <div className="flex gap-4 mt-10">
							<div className="button-prev swiper-custom-prev cursor-pointer text-xl transition-all duration-300 hover:text-primary">
								<i className="fa-solid fa-arrow-left"></i>
							</div>
							<div className="button-next text-xl swiper-custom-next cursor-pointer transition-all duration-300 hover:text-primary">
								<i className="fa-solid fa-arrow-right"></i>
							</div>
						</div> */}
					</div>

					<div className="col-span-3 lg:col-span-2 xl:col-span-3">
						<div className="relative">
							<div className="hidden sm:block">
								<div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('/assets/images/pattern/dot5.svg')]"></div>
								<div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('/assets/images/pattern/dot2.svg')]"></div>
							</div>

							<div id="swiper_one" className="swiper relative">
								<div className="p-10 border rounded-xl bg-white shadow text-center lg:text-left">
									Amet laborum commodo qui sint Lorem duis voluptate. Ad cillum
									et nisi tempor anim ullamco non in non velit. Magna veniam
									quis nisi velit. Eiusmod mollit non magna amet tempor
									reprehenderit sunt ea qui dolore. Officia quis consectetur
									incididunt fugiat elit sit fugiat duis culpa. Ex cillum fugiat
									consequat eu quis.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeedBack
