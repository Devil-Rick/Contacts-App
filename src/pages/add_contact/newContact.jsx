import { useDispatch } from "react-redux";
import Add from "../../components/addContact/newContact";
import { contactAction } from "../../Redux/reducers/contactReducers";

const AddContact = () =>{

    const dispatch = useDispatch();

    const viewContacts = () => {
        dispatch(contactAction.setShowContact());
    }

    return(
        <div className="contact">
            <h1>
                Add Contacts Page
            </h1>
            <Add view = {viewContacts} />
        </div>
    )
}

export default AddContact;