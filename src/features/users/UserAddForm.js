import { useDispatch } from "react-redux";
import { addNewUser } from "./usersSlice";
import { useState } from "react";

export default () => {

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch()

    function newUserForm(e) {
        e.preventDefault();
        dispatch(addNewUser({ id: Math.random(), name, username, email }));
    }

    return (
        <div className="users-header">
            <form onSubmit={newUserForm} className="users-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button type="submit">Add user</button>
                </div>
            </form>
        </div>
    );
};
