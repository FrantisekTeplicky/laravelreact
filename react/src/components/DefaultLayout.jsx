import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";



export default function DefaultLayout() {
    
    // kontrola a presmerovanie uzivatela ak nie je prihlaseny
    const {user, token} = useStateContext()

    if (!token) {
        // presmerovanie na login ak nie je prihlaseny , nie je token
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()
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
                       {user.name}
                       <a href="#" onClick={onLogout} className="btn-logout">Odhlas</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>    
            </div>
        </div>
    )
}
