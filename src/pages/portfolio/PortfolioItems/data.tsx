// type
import { GalleryItem, WorkImages } from '../types'

const gallery: GalleryItem[] = [
	{
		id: 1,
		image: {
			src: 'https://source.unsplash.com/sScmok4Iq1o/1920x1260',
			caption: 'Office Desks',
		},
	},
	{
		id: 2,
		image: {
			src: 'https://source.unsplash.com/6ba_vdgx_go/1920x1260',
			caption: 'Office Desks',
		},
	},
]

const workImages: WorkImages[] = [
	{
		icon: (
			<svg
				className="w-10 h-10 text-primary"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<path
						d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
						id="Combined-Shape"
						fill="currentColor"
						opacity="0.3"
					/>{' '}
					<circle id="Oval-14" fill="currentColor" cx={12} cy={9} r={5} />{' '}
				</g>{' '}
			</svg>
		),
		title: 'UI/UX Design',
	},
	{
		icon: (
			<svg
				className="w-10 h-10 text-primary"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<rect id="bound" x={0} y={0} width={24} height={24} />{' '}
					<path
						d="M12.7442084,3.27882877 L19.2473374,6.9949025 C19.7146999,7.26196679 20.003129,7.75898194 20.003129,8.29726722 L20.003129,15.7027328 C20.003129,16.2410181 19.7146999,16.7380332 19.2473374,17.0050975 L12.7442084,20.7211712 C12.2830594,20.9846849 11.7169406,20.9846849 11.2557916,20.7211712 L4.75266256,17.0050975 C4.28530007,16.7380332 3.99687097,16.2410181 3.99687097,15.7027328 L3.99687097,8.29726722 C3.99687097,7.75898194 4.28530007,7.26196679 4.75266256,6.9949025 L11.2557916,3.27882877 C11.7169406,3.01531506 12.2830594,3.01531506 12.7442084,3.27882877 Z M12,14.5 C13.3807119,14.5 14.5,13.3807119 14.5,12 C14.5,10.6192881 13.3807119,9.5 12,9.5 C10.6192881,9.5 9.5,10.6192881 9.5,12 C9.5,13.3807119 10.6192881,14.5 12,14.5 Z"
						id="Combined-Shape"
						fill="currentColor"
					/>{' '}
				</g>{' '}
			</svg>
		),
		title: 'Brand Identity',
	},
	{
		icon: (
			<svg
				className="w-10 h-10 text-primary"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				{' '}
				<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					{' '}
					<polygon id="Shape" points="0 0 24 0 24 24 0 24" />{' '}
					<path
						d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z"
						id="Rectangle-25"
						fill="currentColor"
					/>{' '}
				</g>{' '}
			</svg>
		),
		title: 'Web Devblopment',
	},
]

export { gallery, workImages }
