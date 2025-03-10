import { Link } from 'react-router-dom'

// types
import { Demo } from './types'

type AccountPagesProps = {
	accountPages: Demo[]
}

const AccountPages = ({ accountPages }: AccountPagesProps) => {
	return (
		<section className="py-20">
			<div className="container">
				<div className="text-center" data-aos="fade-up">
					<span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
						Account Pages
					</span>
					<h1 className="text-4xl mt-4 mb-14">Auth Pages</h1>
				</div>
				<div
					className="grid md:grid-cols-2 grid-cols-1 gap-6"
					data-aos="fade-up"
					data-duration={600}
				>
					{(accountPages || []).map((item, idx) => {
						return (
							<Link to={item.url} target="_blank" key={idx}>
								<div className="border p-2 rounded">
									<img src={item.image} />
								</div>
								<h4 className="text-base text-center mt-4">{item.name}</h4>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default AccountPages
