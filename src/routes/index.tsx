import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Startup from '../pages/landing/Startup'
import Pricing from '../pages/other/Pricing'

// components

// lazy load all the views

//landing Pages

const CryptoPages = React.lazy(() => import('../pages/landing/Crypto'))

// Blog Pages
const BlogList = React.lazy(() => import('../pages/other/Blogs/BlogList'))
const BlogPost = React.lazy(() => import('../pages/other/Blogs/BlogPost'))

//otherPages

export interface RoutesProps {
	path: RouteProps['path']
	name?: string
	element?: RouteProps['element']
	route?: any
	exact?: boolean
	icon?: string
	header?: string
	roles?: string[]
	children?: RoutesProps[]
}

// dashboards
const dashboardRoutes: RoutesProps[] = [
	{
		path: '/',
		name: 'Home',
		header: 'Navigation',
		element: <CryptoPages />,
		route: Route,
	},
]

const AboutusRoutes: RoutesProps[] = [
	{
		path: '/about-us',
		name: 'About us',
		header: 'Navigation',
		element: <Startup />,
		route: Route,
	},
]

const FaqsRoutes: RoutesProps[] = [
	{
		path: '/faqs',
		name: 'FAQs',
		header: 'Navigation',
		element: <Pricing />,
		route: Route,
	},
]

// Blog
const blogroutes: RoutesProps[] = [
	{
		path: '/blogs',
		name: 'Blogs',
		children: [
			{
				path: '/pages/blogs/list',
				name: 'List',
				element: <BlogList />,
				route: Route,
			},
			{
				path: '/pages/blogs/post',
				name: 'Post',
				element: <BlogPost />,
				route: Route,
			},
		],
	},
]

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = []

	routes = routes || []
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item)
		if (typeof item.children !== 'undefined') {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
		}
	})
	return flatRoutes
}

// All routes
const authProtectedRoutes = [
	...blogroutes,
	...dashboardRoutes,
	...AboutusRoutes,
	...FaqsRoutes,
]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
export { authProtectedRoutes, authProtectedFlattenRoutes }
