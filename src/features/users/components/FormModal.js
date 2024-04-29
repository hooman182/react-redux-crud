import { useEffect } from "react";
import NewUserForm from "./NewUserForm";
import UpdateUserForm from "./UpdateUserForm";

export default (props) => {
    function modalClick() {
        props.modal({ isModal: false });
    }

    useEffect(() => {
        const handleEscDown = (event) => {
            if (event.key == "Escape") {
                modalClick();
            }
        };
        document.addEventListener("keydown", handleEscDown);

        return () => {
            document.removeEventListener("keydown", handleEscDown);
        };
    }, []);

    return <div className="modal" onClick={modalClick}>

        {
            props.type==='new' ? <NewUserForm closeModal={modalClick}/> : <UpdateUserForm id={props.id} closeModal={modalClick} />
        }

    </div>;
};
