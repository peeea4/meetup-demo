import { useState } from "react";
import { Block, BtnWrapper, InputWrapper, MeetupFormWrapper, SimpleRequestWrapper } from "./styled";

export const MeetupForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [keyWords, setKeyWords] = useState("");
    const [timeAndPlace, setTimeAndPlace] = useState("");

    const [nameUpd, setNameUpd] = useState("");
    const [descriptionUpd, setDescriptionUpd] = useState("");
    const [keyWordsUpd, setKeyWordsUpd] = useState("");
    const [timeAndPlaceUpd, setTimeAndPlaceUpd] = useState("");

    const [idDelete, setIdDelete] = useState("");
    const [idGet, setIdGet] = useState("");
    const [idUpdate, setIdUpdate] = useState("");

    const token = JSON.parse(localStorage.getItem("token"));

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    };

    const keyWordsChangeHandler = (e) => {
        setKeyWords(e.target.value.split(","));
    };

    const timeAndPlaceChangeHandler = (e) => {
        setTimeAndPlace(e.target.value);
    };

    const nameUpdChangeHandler = (e) => {
        setNameUpd(e.target.value);
    };

    const descriptionUpdChangeHandler = (e) => {
        setDescriptionUpd(e.target.value);
    };

    const keyWordsUpdChangeHandler = (e) => {
        setKeyWordsUpd(e.target.value.split(","));
    };

    const timeAndPlaceUpdChangeHandler = (e) => {
        setTimeAndPlaceUpd(e.target.value);
    };

    const clickHandlerGetAll = async () => {
        await fetch("http://localhost:5000/meetups", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerGetById = () => {
        fetch(`http://localhost:5000/meetups/${idGet}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerCreate = (data) => async () => {
        await fetch("http://localhost:5000/meetups", {
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
        fetch(`http://localhost:5000/meetups/${idDelete}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((json) => json.json())
            .then((data) => console.log(data));
    };

    const clickHandlerUpdate = (data) => async () => {
        fetch(`http://localhost:5000/meetups/${idUpdate}`, {
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

    return (
        <MeetupFormWrapper>
            <Block>
                <h3>Создание митапа</h3>
                <InputWrapper
                    value={name}
                    onChange={nameChangeHandler}
                    type="text"
                    placeholder="Enter meetup name"
                />
                <InputWrapper
                    value={description}
                    onChange={descriptionChangeHandler}
                    type="text"
                    placeholder="Enter meetup description"
                />
                <InputWrapper
                    value={timeAndPlace}
                    onChange={timeAndPlaceChangeHandler}
                    type="text"
                    placeholder="Enter meetup time and place"
                />
                <InputWrapper
                    value={keyWords}
                    onChange={keyWordsChangeHandler}
                    type="text"
                    placeholder="Enter meetup key words (key1, key2, key3)"
                />
                <BtnWrapper
                    onClick={clickHandlerCreate({
                        name,
                        description,
                        timeAndPlace,
                        keyWords,
                    })}
                >
                    Создать митап
                </BtnWrapper>
            </Block>

            <Block>
                <h3>Обновление митапа</h3>
                <InputWrapper
                    value={idUpdate}
                    onChange={(e) => setIdUpdate(e.target.value)}
                    type="number"
                    placeholder="Enter meetup id"
                />
                <InputWrapper
                    value={nameUpd}
                    onChange={nameUpdChangeHandler}
                    type="text"
                    placeholder="Enter meetup name"
                />
                <InputWrapper
                    value={descriptionUpd}
                    onChange={descriptionUpdChangeHandler}
                    type="text"
                    placeholder="Enter meetup description"
                />
                <InputWrapper
                    value={timeAndPlaceUpd}
                    onChange={timeAndPlaceUpdChangeHandler}
                    type="text"
                    placeholder="Enter meetup time and place"
                />
                <InputWrapper
                    value={keyWordsUpd}
                    onChange={keyWordsUpdChangeHandler}
                    type="text"
                    placeholder="Enter meetup key words (key1, key2, key3)"
                />
                <BtnWrapper
                    onClick={clickHandlerUpdate({
                        name: nameUpd,
                        description: descriptionUpd,
                        timeAndPlace: timeAndPlaceUpd,
                        keyWords: keyWordsUpd,
                    })}
                >
                    Обновить митап
                </BtnWrapper>
            </Block>
            <Block>
                <BtnWrapper onClick={clickHandlerGetAll}>Получить все митапы</BtnWrapper>
                <SimpleRequestWrapper>
                    <InputWrapper
                        value={idGet}
                        onChange={(e) => setIdGet(e.target.value)}
                        type="text"
                        placeholder="Enter meetup id"
                    />
                    <BtnWrapper onClick={clickHandlerGetById}>Получить митап по ID</BtnWrapper>
                </SimpleRequestWrapper>
                <SimpleRequestWrapper>
                    <InputWrapper
                        value={idDelete}
                        onChange={(e) => setIdDelete(e.target.value)}
                        type="text"
                        placeholder="Enter meetup id"
                    />
                    <BtnWrapper onClick={clickHandlerDelete}>Удалить митап</BtnWrapper>
                </SimpleRequestWrapper>
            </Block>
        </MeetupFormWrapper>
    );
};
