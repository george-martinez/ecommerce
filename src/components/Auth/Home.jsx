import { useAuthContext } from "../../context/AuthContext"

export function Home() {
    const { user, logout } = useAuthContext()

    const handleLogout = async () => {
        await logout()
    }

    return (
        <div>
            home
            <h1>Bienvenido {user.email}</h1>
            <button onClick={handleLogout}>DESLOGUEARME</button>
        </div>
    )
}