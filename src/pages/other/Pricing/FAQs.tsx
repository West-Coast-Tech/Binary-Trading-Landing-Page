import { FAQGeneral, FUCollapse } from '@/components'
import { useState } from 'react'
import './../../../global.css'

const FAQs = () => {
	const [basicAccordion, setBasicAccordion] = useState<number | null>(0)

	const handleBasicAccordion = (index: number) => () => {
		if (index === basicAccordion) setBasicAccordion(null)
		else setBasicAccordion(index)
	}
	return (
		<section className="py-20 bg-secondary">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto">
					{/* <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
						FAQs
					</span> */}
					<h2 className="heading-h2 my-4 text-slate-100">
						Frequently asked questions
					</h2>
					<p className="md:text-lg text-slate-100 leading-7">
						Here are some of the basic types of questions for our customers
					</p>
				</div>
				<div className="mt-16 lg:mx-32">
					<div data-fc-type="accordion">
						{(FAQGeneral || []).map((item, idx) => {
							return (
								<FUCollapse
									key={idx}
									open={basicAccordion == idx}
									toggleCollapse={handleBasicAccordion(idx)}
								>
									<div
										className={`rounded border bg-white ${
											idx === 0 ? '' : 'mt-2'
										}`}
									>
										<FUCollapse.Toggle
											className="sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-gray-800 transition"
											data-fc-type="collapse"
										>
											{item.title}
											<span className="fa-solid fa-angle-down ms-auto transition-all fc-collapse-open:-rotate-90" />
										</FUCollapse.Toggle>
										<FUCollapse.Menu className="w-full overflow-hidden transition-[height] duration-300 ">
											<p className="sm:text-sm font-medium whitespace-pre-line text-gray-950 p-5 pt-0">
												{item.description}
											</p>
										</FUCollapse.Menu>
									</div>
								</FUCollapse>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQs
