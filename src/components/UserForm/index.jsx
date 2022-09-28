import { useState } from "react";
import { Block, BtnWrapper, InputWrapper, SimpleRequestWrapper, UserFormWrapper } from "./styled";

export const UserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailUpd, setEmailUpd] = useState("");
    const [passwordUpd, setPasswordUpd] = useState("");

    const [deleteId, setIdDelete] = useState("");
    const [getId, setIdGet] = useState("");
    const [updateId, setIdUpdate] = useState("");

    const [value, setValue] = useState("");
    const [userRoleId, setUserIdRole] = useState("");

    const [meetupId, setMeetupId] = useState("");
    const [userId, setUserId] = useState("");

    const token = JSON.parse(localStorage.getItem("token"));

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const emailUpdChangeHandler = (e) => {
        setEmailUpd(e.target.value);
    };

    const passwordUpdChangeHandler = (e) => {
        setPasswordUpd(e.target.value);
    };

    const userRoleIdChangeHandler = (e) => {
        setUserIdRole(e.target.value);
    };

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const meetupIdChangeHandler = (e) => {
        setMeetupId(e.target.value);
    };

    const userIdChangeHandler = (e) => {
        setUserId(e.target.value);
    };

    const clickHandlerGetAll = async () => {
        await fetch("http://localhost:5000/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerGetById = () => {
        fetch(`http://localhost:5000/users/${getId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerCreate = (data) => async () => {
        await fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerDelete = () => {
        fetch(`http://localhost:5000/users/${deleteId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerUpdate = (data) => async () => {
        fetch(`http://localhost:5000/users/${updateId}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerSetRole = (data) => async () => {
        fetch(`http://localhost:5000/users/role`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerSetMeetup = (data) => async () => {
        fetch(`http://localhost:5000/users/meetup`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    return (
        <UserFormWrapper>
            <Block>
                <h3>Создание пользователя</h3>
                <InputWrapper
                    value={email}
                    onChange={emailChangeHandler}
                    type="text"
                    placeholder="Enter user email"
                />
                <InputWrapper
                    value={password}
                    onChange={passwordChangeHandler}
                    type="text"
                    placeholder="Enter user password"
                />
                <BtnWrapper
                    onClick={clickHandlerCreate({
                        email,
                        password,
                    })}
                >
                    Создать пользователя
                </BtnWrapper>
            </Block>

            <Block>
                <h3>Обновление пользователя</h3>
                <InputWrapper
                    value={updateId}
                    onChange={(e) => setIdUpdate(e.target.value)}
                    type="number"
                    placeholder="Enter meetup id"
                />
                <InputWrapper
                    value={emailUpd}
                    onChange={emailUpdChangeHandler}
                    type="text"
                    placeholder="Enter user email"
                />
                <InputWrapper
                    value={passwordUpd}
                    onChange={passwordUpdChangeHandler}
                    type="text"
                    placeholder="Enter user password"
                />
                <BtnWrapper
                    onClick={clickHandlerUpdate({
                        email: emailUpd,
                        password: passwordUpd,
                    })}
                >
                    Обновить пользователя
                </BtnWrapper>
            </Block>

            <Block>
                <BtnWrapper onClick={clickHandlerGetAll}>Получить всех пользователей</BtnWrapper>
                <SimpleRequestWrapper>
                    <InputWrapper
                        value={getId}
                        onChange={(e) => setIdGet(e.target.value)}
                        type="text"
                        placeholder="Enter user id"
                    />
                    <BtnWrapper onClick={clickHandlerGetById}>
                        Получить пользователя по ID
                    </BtnWrapper>
                </SimpleRequestWrapper>
                <SimpleRequestWrapper>
                    <InputWrapper
                        value={deleteId}
                        onChange={(e) => setIdDelete(e.target.value)}
                        type="text"
                        placeholder="Enter user id"
                    />
                    <BtnWrapper onClick={clickHandlerDelete}>Удалить пользователя</BtnWrapper>
                </SimpleRequestWrapper>
            </Block>

            <Block>
                <h3>Добавление роли пользователю</h3>
                <InputWrapper
                    value={value}
                    onChange={valueChangeHandler}
                    type="text"
                    placeholder="Enter role value"
                />
                <InputWrapper
                    value={userRoleId}
                    onChange={userRoleIdChangeHandler}
                    type="text"
                    placeholder="Enter user id"
                />
                <BtnWrapper
                    onClick={clickHandlerSetRole({
                        value,
                        userId: +userRoleId,
                    })}
                >
                    Добавить роль пользователю с id {userRoleId}
                </BtnWrapper>
            </Block>

            <Block>
                <h3>Добавление митапа пользователю</h3>
                <InputWrapper
                    value={userId}
                    onChange={userIdChangeHandler}
                    type="number"
                    placeholder="Enter user id"
                />
                <InputWrapper
                    value={meetupId}
                    onChange={meetupIdChangeHandler}
                    type="text"
                    placeholder="Enter meetup id"
                />
                <BtnWrapper
                    onClick={clickHandlerSetMeetup({
                        userId: +userId,
                        meetupId: +meetupId,
                    })}
                >
                    Добавить митап пользователю
                </BtnWrapper>
            </Block>
        </UserFormWrapper>
    );
};
