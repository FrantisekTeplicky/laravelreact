import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            <div>
                Sekcia Iba pre prihlasených a vložené z menu:
                <Outlet />
            </div>
        </div>   
    )
}