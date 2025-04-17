// images
import postImg1 from '/assets/images/blog/post1.jpg'
import postImg2 from '/assets/images/blog/post3.jpg'

import avatar1 from '/assets/images/avatars/img-1.jpg'
import avatar2 from '/assets/images/avatars/img-2.jpg'
import avatar3 from '/assets/images/avatars/img-7.jpg'

import blog1 from '/assets/images/blog/blog-1.png'
import blog2 from '/assets/images/blog/blog-2.png'
import blog3 from '/assets/images/blog/blog-3.png'

export type Post = {
	image: string
	tag: { variant?: string; value: string }
	title: string
	description?: string
	postedBy?: {
		avatar: string
		name: string
	}
	postedOn?: {
		date: string
		time: string
	}
	overlay?: string
	groupAvatars?: string[]
}

const post1: Post[] = [
	{
		image: postImg1,
		tag: { value: 'Lorem Ipsum' },
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
		postedBy: {
			avatar: avatar2,
			name: 'Lorem Ipsum',
		},
		postedOn: {
			date: '11 Mar, 2023',
			time: '3 min read',
		},
	},
	{
		image: postImg1,
		tag: { value: 'Lorem Ipsum' },
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
		postedBy: {
			avatar: avatar1,
			name: 'Lorem Ipsum',
		},
		postedOn: {
			date: '9 Mar, 2023',
			time: '5 min read',
		},
	},
]

const post2: Post[] = [
	{
		image: blog1,
		tag: { variant: 'bg-orange-500/10 text-orange-500', value: 'Lorem Ipsum' },
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	},
	{
		image: blog2,
		tag: { variant: 'bg-green-500/10 text-green-500 ', value: 'Lorem Ipsum' },
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	},
	{
		image: blog3,
		tag: { variant: 'bg-teal-500/10 text-teal-500', value: 'Community' },
		title: 'Your Way to a Successful Sales Campaigns',
		description:
			'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads...',
	},
]

const post3: Post[] = [
	{
		image: postImg2,
		tag: { variant: 'danger', value: 'Resource' },
		title: 'Top 10 ideas to improve the team productivity',
		groupAvatars: [avatar3, avatar1, avatar2],
	},
]

export { post1, post2, post3 }
