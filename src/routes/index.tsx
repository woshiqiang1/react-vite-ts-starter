import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />,
		index: true
	}
]

const Routes = () => {
	return useRoutes(routes)
}

export default Routes
