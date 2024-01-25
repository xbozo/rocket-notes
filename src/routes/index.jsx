import { BrowserRouter } from 'react-router-dom'

import { useAuthContext } from '../contexts/authContext.jsx'
import { AppRoutes } from './app.routes.jsx'
import { AuthRoutes } from './auth.routes.jsx'

const Routes = () => {
	const { user } = useAuthContext()

	return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}

export default Routes
