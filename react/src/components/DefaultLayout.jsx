import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            Home štruktúra a vložené z menu :
           <Outlet /> 
        </div>
    )
}
