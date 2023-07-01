import { BrowserRouter } from "react-router-dom"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes.jsx"

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )                       // a authroutes deve apenas estar disponivel pra quem estiver logado
}

export default Routes