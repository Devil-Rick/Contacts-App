import { useDispatch, useSelector } from "react-redux";
import Add from "../../components/addContact/newContact";
import { contactAction, contactSelector } from "../../Redux/reducers/contactReducers";
import { addContactThunk } from "../../Redux/thunk/thunk";

const AddContact = () =>{

    const contacts = useSelector(contactSelector)

    const dispatch = useDispatch();

    const viewContacts = () => {
        dispatch(contactAction.setShowContact());
    }

    const add = (user) => {
        dispatch(addContactThunk(user))
    }

    return(
        <div className="contact">
            <h1>
                Add <br/> Contacts <br/> Page
            </h1>
            <Add view = {viewContacts} id = {contacts.length} add = {add} />
        </div>
    )
}

export default AddContact;