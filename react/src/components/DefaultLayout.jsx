import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";



export default function DefaultLayout() {
    
    // kontrola a presmerovanie uzivatela ak nie je prihlaseny
    const {user, token} = useStateContext()

    if (!token) {
        // presmerovanie na login ak nie je prihlaseny , nie je token
        return <Navigate to="/login" />
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header

                    </div>
                    <div>
                       User info
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>    
            </div>
        </div>
    )
}
