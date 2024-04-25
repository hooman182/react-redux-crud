import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./usersSlice";

export default (props) => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    function editBtn(id) {
        props.updateForm({ id, update: true });
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => editBtn(user.id)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            dispatch(removeUser(user.id))
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
