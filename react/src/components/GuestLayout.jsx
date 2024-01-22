import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";




export default function GuestLayout() {

    const {token} = useStateContext()
    if (token) {
        // presmerovanie prihlaseneho
        return <Navigate to="/" />
    }


    return (
        <div>
            <div>
                Sekcia Iba pre prihlasených a vložené z menu:
                <Outlet />
            </div>
        </div>   
    )
}