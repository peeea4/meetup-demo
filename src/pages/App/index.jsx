import { useState } from "react";
import { CreateRole } from "../../components/CreateRole";
import { Auth } from "../Auth";
import { Home } from "../Home";

export const App = () => {
    const [isLogin, setStatus] = useState(JSON.parse(localStorage.getItem("token")) ? true : false);

    return (
        <>
            <CreateRole />
            {!isLogin ? <Auth setStatus={setStatus} /> : <Home />}
        </>
    );
};
