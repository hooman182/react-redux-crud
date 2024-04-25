import "./Users.scss";
import UserList from "./UserList";
import UserAddForm from "./UserAddForm";
import UserUpdateForm from "./UserUpdateForm";
import { useState } from "react";

export default () => {
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(0);

    function handleUpdateForm({ id, update }) {
        setUpdate(update);
        setId(id);
    }

    return (
        <div className="users">
            <UserAddForm />
            <UserList updateForm={handleUpdateForm} />
            {update && <UserUpdateForm updateForm={handleUpdateForm} id={id}/>}
        </div>
    );
};
