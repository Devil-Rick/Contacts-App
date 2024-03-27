
import { useDispatch } from "react-redux"
import { contactAction } from '../../Redux/reducers/contactReducers'
import ContactComp from "../../components/viewContact/contacts";


const Contacts = () => {
    const dispatch = useDispatch();

    const updateContact = (id, index) => {
        dispatch(contactAction.setShowContact({id, index}))
    }

    return (
        <ContactComp
            update={updateContact}
        />
    )
}

export default Contacts;