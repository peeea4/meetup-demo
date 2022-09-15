import { useState } from "react";
import { Auth } from "../Auth";
import { Home } from "../Home";

export const App = () => {
    const [isLogin, setStatus] = useState(
        JSON.parse(localStorage.getItem("token")) ? true : false,
    );

    return !isLogin ? <Auth setStatus={setStatus} /> : <Home />;
};
