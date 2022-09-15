import { useState } from "react";
import { json, NavLink } from "react-router-dom";
import { Paragraph } from "../LoginForm/styled";
import { AuthFormWrapper, BtnWrapper, InputWrapper } from "./styled";

export const RegistrationForm = ({ setStatus }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const clickHandlerRegistration = (data) => async () => {
        await fetch("http://localhost:5000/auth/registration", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then((json) => json.json())
            .then((data) => {
                localStorage.setItem("token", JSON.stringify(data.token));
                setStatus(true);
            });
    };

    return (
        <AuthFormWrapper>
            <h3>Регистрация</h3>
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
            <BtnWrapper onClick={clickHandlerRegistration({ password: password, email: email })}>
                Зарегистрироваться
            </BtnWrapper>
            <Paragraph>
                Already registered? <NavLink to="/login">Sign in</NavLink>
            </Paragraph>
        </AuthFormWrapper>
    );
};
