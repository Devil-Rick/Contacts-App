import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { contactAction } from '../../Redux/reducers/contactReducers'
import ContactComp from "../../components/viewContact/contacts";


const Contacts = () => {
    const [contact, setContact] = useState()

    const dispatch = useDispatch();

    const updateContact = (id) => {
        dispatch(contactAction.setShowContact())
        setContact(id)
    }

    return (
        <div className="contact">
            <ContactComp
                update={updateContact}
                contact={contact}
            />
        </div>
    )
}

export default Contacts;