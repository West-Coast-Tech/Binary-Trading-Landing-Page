// types
import { Integration } from './types'

type IntegrationsProps = {
	integrations: Integration[]
}

const Integrations = ({ integrations }: IntegrationsProps) => {
	return (
		<section className="bg-gray-100 xl:py-24 py-16">
			<div className="container" data-aos="fade-up" data-aos-duration={1500}>
				<div className="text-center">
					<span className="text-xs bg-primary/10 text-secondary rounded-full px-3 py-1">
						Integrations
					</span>
					<h1 className="text-3xl/tight font-medium mt-3 mb-4">
						Sync your data anywhere
					</h1>
					<p className="text-gray-500">
						Sync your campaigns or other marketing data{' '}
						<span className="text-primary">anywhere.</span>
					</p>
				</div>
				<div className="pt-16">
					<div className="grid xl:grid-cols-2 grid-cols-1 gap-7">
						{(integrations || []).map((integration, idx) => {
							return (
								<div key={idx}>
									<div className="bg-white flex items-center rounded gap-5 p-5">
										<img
											src={integration.appLogo}
											className={`${
												integration.app === 'Google Sheets' ? 'xl:w-32' : ''
											} w-16`}
										/>
										<div>
											<h1 className="mb-3">{integration.app}</h1>
											<p className="text-gray-500">{integration.description}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Integrations
