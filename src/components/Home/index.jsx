import { AuthForm } from "../AuthForm";
import { MeetupForm } from "../MeetupForm";
import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <AuthForm />
            <MeetupForm />
        </HomeWrapper>
    );
};
