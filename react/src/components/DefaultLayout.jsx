import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";



export default function DefaultLayout() {
    
    // kontrola a presmerovanie uzivatela ak nie je prihlaseny
    const {user, token} = useStateContext()

    if (!token) {
        // presmerovanie na login ak nie je prihlaseny , nie je token
        return <Navigate to="/login" />
    }

    return (
        <div>
            Home štruktúra a vložené z menu :
           <Outlet /> 
        </div>
    )
}
