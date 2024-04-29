import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, readUsers } from "../usersSlice";

export default (props) => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    function newUserForm(e) {
        e.preventDefault();
        dispatch(
            createUser({ id: Math.random().toString(), name, username, email })
        );
        dispatch(readUsers());
        props.closeModal();
    }

    return (
        <form
            method="post"
            className="bg-white w-1/3 p-6 rounded-md"
            onSubmit={newUserForm}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="border-b-2">
                <h1 className="text-xl font-bold text-center py-2">
                    Add new user
                </h1>
            </div>
            <div className="my-2.5">
                <label htmlFor="name" className="label-form">
                    Name
                </label>
                <div className="mt-1">
                    <input
                        id="name"
                        type="text"
                        className="input"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-2.5">
                <label htmlFor="username" className="label-form">
                    Username
                </label>
                <div className="mt-1">
                    <input
                        id="username"
                        type="text"
                        className="input"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-2.5">
                <label htmlFor="email" className="label-form">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        type="email"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-4">
                <button type="submit" className="btn btn-indigo w-full">
                    Add User
                </button>
            </div>
        </form>
    );
};
