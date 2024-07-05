import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Start from './pages/Start'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Like from './pages/Like'


function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Start />
        },
        {
            path: '/Home',
            element: <Home />
        },
        {
            path: '/Profile',
            element: <Profile />
        },
        {
            path: '/Login',
            element: <Login />
        },
        {
            path: '/Signup',
            element: <Signup />
        },
        {
            path: '/Like',
            element: <Like />
        },
    ])
    return(
        <RouterProvider router={router} />
    )
}
export default Router
