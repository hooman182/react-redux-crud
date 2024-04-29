import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterById, readUsers, updateUser } from "../usersSlice";

export default (props) => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    const [name, setName] = useState(getUser()[0].name);
    const [username, setUserName] = useState(getUser()[0].username);
    const [email, setEmail] = useState(getUser()[0].email);

    function updateUserForm(e) {
        e.preventDefault();
        dispatch(
            updateUser({
                id: props.id,
                name: name,
                username: username,
                email: email,
            })
        );
        dispatch(readUsers());
        props.closeModal();
    }

    function getUser() {
        return users.filter(user => user.id == props.id)
    }

    useEffect(() => {
        console.log();
    }, []);

    return (
        <form
            method="post"
            className="bg-white w-1/3 p-6 rounded-md"
            onSubmit={updateUserForm}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="border-b-2">
                <h1 className="text-xl font-bold text-center py-2">
                    Update user information
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
                        value={name}
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
                        value={username}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-4">
                <button type="submit" className="btn btn-indigo w-full">
                    Save changes
                </button>
            </div>
        </form>
    );
};
