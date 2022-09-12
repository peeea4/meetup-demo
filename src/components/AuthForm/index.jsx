import { useState } from "react";
import { AuthFormWrapper, Block, BtnWrapper, InputWrapper } from "./styled";

export const AuthForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [emailLogin, setEmailLogin] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };
    const emailLoginChangeHandler = (e) => {
        setEmailLogin(e.target.value);
    };

    const passwordLoginChangeHandler = (e) => {
        setPasswordLogin(e.target.value);
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
            .then((data) => console.log(data));
    };

    const clickHandlerLogin = (data) => async () => {
        await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    return (
        <AuthFormWrapper>
            <Block>
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
                <BtnWrapper
                    onClick={clickHandlerRegistration({ password: password, email: email })}
                >
                    Зарегистрироваться
                </BtnWrapper>
            </Block>
            <Block>
                <h3>Вход</h3>
                <InputWrapper
                    value={emailLogin}
                    onChange={emailLoginChangeHandler}
                    type="email"
                    placeholder="Enter email"
                />
                <InputWrapper
                    value={passwordLogin}
                    onChange={passwordLoginChangeHandler}
                    type="password"
                    placeholder="Enter password"
                />
                <BtnWrapper
                    onClick={clickHandlerLogin({ password: passwordLogin, email: emailLogin })}
                >
                    Войти
                </BtnWrapper>
            </Block>
        </AuthFormWrapper>
    );
};
