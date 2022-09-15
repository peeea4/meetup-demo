import { NavLink, Outlet } from "react-router-dom";

export const LayoutAuth = () => {
    return (
        <>
            <Outlet />
            <nav>
                <NavLink to="/login"></NavLink>
                <NavLink to="/regi"></NavLink>
            </nav>
        </>
    );
};
