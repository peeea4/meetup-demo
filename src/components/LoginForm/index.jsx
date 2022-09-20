import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthFormWrapper, BtnWrapper, InputWrapper, Paragraph } from "./styled";

export const LoginForm = ({ setStatus }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const clickHandlerLogin = (data) => async () => {
        await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("token", JSON.stringify(data.token));
                    setStatus(true);
                }
            });
    };

    return (
        <AuthFormWrapper>
            <h3>Вход</h3>
            <InputWrapper
                value={email}
                onChange={emailChangeHandler}
                type="email"
                placeholder="Enter email"
            />
            <InputWrapper
                value={password}
                onChange={passwordChangeHandler}
                type="password"
                placeholder="Enter password"
            />
            <BtnWrapper onClick={clickHandlerLogin({ password, email })}>Войти</BtnWrapper>
            <Paragraph>
                Don't have an account yet? <NavLink to="/registration">Register</NavLink>
            </Paragraph>
        </AuthFormWrapper>
    );
};
