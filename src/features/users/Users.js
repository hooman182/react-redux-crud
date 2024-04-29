import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormModal from "./components/FormModal";
import { readUsers } from "./usersSlice";

export default () => {
    const [formType, setFormType] = useState("new");
    const [id, setId] = useState(0);
    const [isModal, setIsModal] = useState(false);
    const dispatch = useDispatch();

    function handleModal(bind) {
        setIsModal(bind.isModal);
        setFormType(bind.formType);
        setId(bind.id);
    }

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return (
        <div className="users">
            <UserList modal={handleModal} />

            {isModal && (
                <FormModal modal={handleModal} type={formType} id={id} />
            )}
        </div>
    );
};
