import { FAQRegisteration, FUCollapse } from '@/components'
import { useState } from 'react'

const FAQSTHREE = () => {
	const [basicAccordion, setBasicAccordion] = useState<number | null>(0)

	const handleBasicAccordion = (index: number) => () => {
		if (index === basicAccordion) setBasicAccordion(null)
		else setBasicAccordion(index)
	}
	return (
		<section className="py-12 bg-gradient-to-br from-primary to-secondary">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto bg-blue-500 flex flex-wrap gap-5 justify-center py-3">
					<span className="text-xl font-medium rounded-full">✅</span>
					<h2 className="md:text-xl/tight text-xl font-semibold">
						Registration and Verification
					</h2>
				</div>
				<div className="mt-8 lg:mx-32">
					<div data-fc-type="accordion">
						{(FAQRegisteration || []).map((item, idx) => {
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
											className="sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-gray-800 transition hover:text-gray-500"
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

export default FAQSTHREE
