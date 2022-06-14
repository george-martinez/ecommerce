import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Spinner } from "../../Spinner/Spinner";

export function ProtectedRoute ({ children }) {
    const { user, loading } = useAuthContext()

    if (loading) return <Spinner />

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}