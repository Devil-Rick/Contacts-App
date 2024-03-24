
import { useDispatch } from "react-redux"
import { contactAction } from '../../Redux/reducers/contactReducers'
import ContactComp from "../../components/viewContact/contacts";


const Contacts = () => {
    const dispatch = useDispatch();

    const updateContact = (id) => {
        dispatch(contactAction.setShowContact(id))
    }

    return (
        <ContactComp
            update={updateContact}
        />
    )
}

export default Contacts;