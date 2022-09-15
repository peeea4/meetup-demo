import { Route, Routes } from "react-router-dom";
import { MeetupForm } from "../../components/MeetupForm";
import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <MeetupForm />
        </HomeWrapper>
    );
};
