
import { RootRoute, Route, createRouter } from '@tanstack/react-router'
import Home from '../../pages/home/Home'
import Register from '../../pages/register/Register'
import About from '../../pages/about/About'
import Login from '../../pages/login/Login'
import Layout from '../Layout'
import Child1 from '../../pages/home/child/child1'


const rootRoute = new RootRoute({
  component: Layout,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const child1Route = new Route({
  getParentRoute: () => homeRoute,
  path: 'child/child1',
  component: Child1,
})



const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const routeTree = rootRoute.addChildren([
  homeRoute.addChildren([child1Route]),
  registerRoute,
  aboutRoute,
  loginRoute,
])

const router = createRouter({ routeTree })

export default router
