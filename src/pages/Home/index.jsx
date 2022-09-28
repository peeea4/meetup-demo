import { MeetupForm } from "../../components/MeetupForm";
import { UserForm } from "../../components/UserForm";
import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <MeetupForm />
            <UserForm />
        </HomeWrapper>
    );
};
