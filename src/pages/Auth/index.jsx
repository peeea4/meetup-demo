import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { RegistrationForm } from "../../components/RegistrationForm";

export const Auth = ({ setStatus }) => {
    console.log(setStatus);
    return (
        <Routes>
            <Route path="/" element={<LoginForm setStatus={setStatus} />} />
            <Route path="login" element={<LoginForm setStatus={setStatus} />} />
            <Route path="registration" element={<RegistrationForm setStatus={setStatus} />} />
        </Routes>
    );
};
