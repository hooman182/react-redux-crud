import "./Users.scss";
import UserList from "./UserList";
import UserAddForm from "./UserAddForm";

export default () => {
    return (
        <div className="users">
            <UserAddForm />
            <UserList />
        </div>
    );
};
