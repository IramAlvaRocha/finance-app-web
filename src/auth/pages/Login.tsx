import { LoginForm } from "../components/LoginForm"
import { Helmet } from "react-helmet-async"

export const Login = () => {
    return (
        <>
            <Helmet>
                <title> Iniciar sesión | Finance App</title>
            </Helmet>
            <LoginForm />
        </>
    )
}
