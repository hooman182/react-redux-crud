import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./usersSlice";
// import "./UserModal.scss";

export default (props) => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    function updateUserForm(e) {
        e.preventDefault();
        dispatch(
            updateUser({
                id: props.id,
                name,
                username,
                email,
            })
        );
    }

    function closeModal() {
        props.updateForm({ id: 0, update: false });
    }

    return (
        <div className="users-modal">
            <button className="users-modal-btn" onClick={() => closeModal()}>
                X
            </button>
            <form onSubmit={updateUserForm} className="users-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Update user</button>
                </div>
            </form>
        </div>
    );
};
