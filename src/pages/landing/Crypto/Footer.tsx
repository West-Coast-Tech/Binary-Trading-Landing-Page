import React from 'react'
import logoDark from '/assets/images/logo-dark.svg'
export const Footer = () => {
	return (
		<div className="w-full bg-gradient-to-b from-gray-800 to-secondary text-gray-500 text-xs px-4">
			<div className="container relative md:pt-24 pt-12 pb-8 ">
				<div className="flex flex-row justify-center">
					{/* Logo and Affiliates */}
					<div className="flex flex-col gap-8">
						<img src={logoDark} className="h-8" />
						<div className="flex flex-row gap-7">
							<h3>Contact Us</h3>
							<h3>Privacy Policy</h3>
							<h3>Affiliates</h3>
						</div>
					</div>
					{/* Social Links */}
					{/* <div className="flex flex-row gap-4 pr-12">
						<img src={logoDark} className="h-4" />
						<img src={logoDark} className="h-4" />
						<img src={logoDark} className="h-4" />
						<img src={logoDark} className="h-4" />
					</div> */}
				</div>
				<div className="mt-12 flex items-start justify-between gap-10 md:flex-row flex-col ">
					<div>
						<p>
							Trinomo does not provide services to individuals residing in
							certain jurisdictions, including but not limited to the United
							States of America, Iran, North Korea, member states of the
							European Union, the United Kingdom, and other restricted regions.
							Services are also not available to persons under the age of 18.
							The information presented on this website, including any
							translated content, is not intended as an offer or solicitation in
							any jurisdiction where such activity would be contrary to local
							laws or regulations.
						</p>
						<p className="mt-8">
							Trading in binary options, forex, and other leveraged financial
							instruments involves a high level of risk and may result in the
							loss of your invested capital. You should not invest funds that
							you cannot afford to lose. Leveraged products are not suitable for
							all investors, and it is important that you fully understand the
							risks involved before engaging in such trading activities. Even
							non-leveraged instruments, such as equities, carry risk, as their
							value may rise or fall, potentially leading to a return of less
							than your initial investment.
						</p>
					</div>
					<div className="min-w-64 flex items-start flex-row w-full justify-center  md:justify-end ">
						<div className="flex flex-row  md:flex-col gap-5 ">
							<a href="">Risk Disclosure</a>
							<a href="">Preventing money laundering</a>
							<a href="">Terms of Service</a>
							<a href="">Legal Documents</a>
						</div>
					</div>
				</div>
				<p className="w-full text-center mt-10">
					Copyright © {new Date().getFullYear()} 2025 Trinomo. All rights
					reserved. Content may not be reproduced without permission.
				</p>
			</div>
		</div>
	)
}
