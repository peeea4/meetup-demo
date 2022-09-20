import { useState } from "react";
import { CreateRoleBtn, CreateRoleInput, CreateRoleWrapper } from "./styled";

export const CreateRole = () => {
    const [role, setRole] = useState("");
    const [description, setDescription] = useState("");
    const createRoleHandler = async () => {
        await fetch("http://localhost:5000/roles", {
            method: "POST",
            body: JSON.stringify({
                value: role,
                description,
            }),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then((json) => json.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <CreateRoleWrapper>
            <CreateRoleInput placeholder="Role" onChange={(e) => setRole(e.target.value)} />
            <CreateRoleInput
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <CreateRoleBtn onClick={createRoleHandler}>Create Role</CreateRoleBtn>
        </CreateRoleWrapper>
    );
};
