import React from 'react'
import { Route, RouteProps, Routes, Navigate } from 'react-router-dom'

import {
	authProtectedFlattenRoutes,
	// publicProtectedFlattenRoutes
} from '.'
import HorizontalLayout from '../layouts/HorizontalLayout'
import DefaultLayout from '../layouts/Default'

const AllRoutes = (props: RouteProps) => {
	return (
		<React.Fragment>
			<Routes>
				<Route>
					{authProtectedFlattenRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								<HorizontalLayout {...props}>{route.element}</HorizontalLayout>
							}
							key={idx}
						/>
					))}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</React.Fragment>
	)
}

export default AllRoutes
