import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//image
import logoDark from '/assets/images/logo-dark.svg'

const ConfirmAccount = () => {
	useEffect(() => {
		if (document.body) {
			document.body.classList.add('bg-slate-100', 'tracking-wide')
		}

		return () => {
			if (document.body) {
				document.body.classList.remove('bg-slate-100', 'tracking-wide')
			}
		}
	}, [])
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="container">
				<div>
					<div className="lg:w-1/2 mx-auto mb-6">
						<div className="flex justify-center mb-6">
							<Link to="/">
								<img src={logoDark} alt="logo-img" className="h-7" />
							</Link>
						</div>
						<div className="bg-white shadow-md text-center p-6 rounded-s col-span-6">
							<h6 className="text-base/[1.6] font-semibold text-gray-600 mb-0 mt-4">
								Please check your inbox
							</h6>
							<div className="text-sky-500 py-5">
								<svg
									className="w-20 h-20 mx-auto text-primary"
									viewBox="0 0 24 24"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
								>
									{' '}
									<g
										stroke="none"
										strokeWidth={1}
										fill="none"
										fillRule="evenodd"
									>
										{' '}
										<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
										<path
											d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
											id="Combined-Shape"
											fill="currentColor"
											opacity="0.3"
										/>{' '}
										<path
											d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
											id="Combined-Shape"
											fill="currentColor"
										/>{' '}
									</g>{' '}
								</svg>
							</div>
							<p className="text-gray-500 text-sm font-medium mb-6">
								We sent a confirmation link to you at{' '}
								<span className="text-gray-800 fw-medium">
									youremail@domain.com
								</span>
							</p>
							<p className="text-gray-500 text-sm font-medium">
								Simply click on the link available in the email to confirm your
								account.
							</p>
						</div>
					</div>
					<div className="w-full text-center">
						<p className="text-gray-500 leading-6 text-base">
							Back to{' '}
							<Link
								to="/pages/account/login"
								className="text-primary font-semibold ms-1"
							>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmAccount
