import { PlanItem } from './types'
import avatar1 from '/assets/images/avatars/img-1.jpg'
import avatar2 from '/assets/images/avatars/img-2.jpg'

interface Testimonials {
	name: string
	position: string
	description: string
	image: string
}

interface AccordionData {
	title: string
	description: string
}

const testimonials: Testimonials[] = [
	{
		name: 'Lorem Ipsum',
		position: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		image: avatar1,
	},
	{
		name: 'Lorem Ipsum',
		position: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		image: avatar2,
	},
	{
		name: 'Lorem Ipsum',
		position: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		image: avatar1,
	},
	{
		name: 'Lorem Ipsum',
		position: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		image: avatar2,
	},
]

const FAQGeneral: AccordionData[] = [
	{
		title: 'Lorem ipsum dolor sit amet?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Consectetur adipiscing elit?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Sed do eiusmod tempor incididunt?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Ut labore et dolore magna aliqua?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Quis nostrud exercitation ullamco?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Duis aute irure dolor in reprehenderit?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Excepteur sint occaecat cupidatat non proident?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		title: 'Sunt in culpa qui officia deserunt?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
]

const FAQFinancial: AccordionData[] = [
	{
		title: 'Lorem ipsum dolor sit amet?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit:\n
		- Ut enim ad minim veniam, quis nostrud exercitation
		- Duis aute irure dolor in reprehenderit
		- Excepteur sint occaecat cupidatat non proident
		- Sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	},
	{
		title: 'Consectetur adipiscing elit?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
	},
	{
		title: 'Ut enim ad minim veniam?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Duis aute irure dolor in reprehenderit?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
	},
	{
		title: 'Excepteur sint occaecat cupidatat non proident?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Sunt in culpa qui officia deserunt?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
	},
	{
		title: 'Sed ut perspiciatis unde omnis iste natus?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Nemo enim ipsam voluptatem quia voluptas?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Neque porro quisquam est, qui dolorem?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Quis autem vel eum iure reprehenderit?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
]

const FAQRegisteration: AccordionData[] = [
	{
		title: 'Lorem ipsum dolor sit amet?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit:\n
		- Ut enim ad minim veniam, quis nostrud exercitation
		- Duis aute irure dolor in reprehenderit
		- Excepteur sint occaecat cupidatat non proident
		- Sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	},
	{
		title: 'Consectetur adipiscing elit?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
	},
	{
		title: 'Ut enim ad minim veniam?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Duis aute irure dolor in reprehenderit?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Excepteur sint occaecat cupidatat non proident?',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
	},
	{
		title: 'Sunt in culpa qui officia deserunt?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Sed ut perspiciatis unde omnis iste natus?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
]
const plans: PlanItem[] = [
	{
		id: 1,
		name: 'Lorem Ipsum',
		price: '49',
		duration: '/ month',
		features: [
			'Lorem ipsum dolor sit amet',
			'Consectetur adipiscing elit',
			'Sed do eiusmod tempor',
			'Ut labore et dolore magna',
		],
		isRecommended: false,
	},
	{
		id: 2,
		name: 'Lorem Ipsum',
		price: '99',
		duration: '/ month',
		features: [
			'Lorem ipsum dolor sit amet',
			'Consectetur adipiscing elit',
			'Sed do eiusmod tempor',
			'Ut labore et dolore magna',
			'Quis nostrud exercitation',
		],
		isPopular: true,
		isRecommended: true,
	},
	{
		id: 3,
		name: 'Lorem Ipsum',
		price: '599',
		duration: '/ month',
		features: [
			'Lorem ipsum dolor sit amet',
			'Consectetur adipiscing elit',
			'Sed do eiusmod tempor',
			'Ut labore et dolore magna',
			'Quis nostrud exercitation',
		],
		isRecommended: false,
	},
]

export { testimonials, plans, FAQGeneral, FAQFinancial, FAQRegisteration }
