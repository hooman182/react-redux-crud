import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUsers } from "../usersSlice";
import { useEffect, useState } from "react";

export default (props) => {
    const { users, loading } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    function updateBtn(id) {
        props.modal({ isModal: true, type: "update", id });
    }

    function newUserBtn() {
        props.modal({ isModal: true, formType: "new" });
    }

    function deleteBtn(id) {
        dispatch(deleteUser(id));
        dispatch(readUsers());
    }

    function filterUsersByName() {
        return users.filter((user) => {
            if (search === "") {
                return user;
            } else {
                return user.name.toLowerCase().includes(search.toLowerCase());
            }
        });
    }

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return (
        <div className="p-8 rounded-md w-full">
            <div className="md:flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">User's List</h2>
                    <span className="text-xs">All users information</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="bg-gray-50 outline-none ml-1 block "
                            type="text"
                            placeholder="search in name's..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="md:ml-10 2xl:ml-40 ml-2 space-x-8">
                        <button className="btn btn-indigo" onClick={newUserBtn}>
                            New User
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="md:min-w-full leading-normal ">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Username
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading &&
                                    users &&
                                    filterUsersByName().map((user) => {
                                        return (
                                            <tr key={user.id}>
                                                <td>
                                                    <p>{user.name}</p>
                                                </td>
                                                <td>
                                                    <p>{user.username}</p>
                                                </td>
                                                <td>
                                                    <p>{user.email}</p>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-indigo"
                                                        onClick={() =>
                                                            updateBtn(user.id)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="ml-2"
                                                        onClick={() => deleteBtn(
                                                            user.id
                                                        )}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of {users.length} Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm text-indigo-50 btn-indigo rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button className="text-sm text-indigo-50 btn-indigo rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
