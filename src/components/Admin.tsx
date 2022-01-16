import { Outlet } from "react-router-dom";
import AdminAside from "./AdminAside";

const Admin = () => {
    return (
        <div className='admin'>
            <AdminAside />
            <Outlet />
        </div>
    )
}

export default Admin;
