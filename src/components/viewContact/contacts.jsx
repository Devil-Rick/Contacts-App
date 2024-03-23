import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { contactThunk, contactSelector } from '../../Redux/reducers/contactReducers'


const ContactComp = () => {
    const allcontacts = useSelector(contactSelector)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(contactThunk());
    }, [dispatch])

    return (
        <>
            Contacts Component Page
            <div className="contact-container">
                {allcontacts.map(contact => {
                    return (
                        <div key={contact.id} className="contact-item">
                            <p>Name : {contact.name}</p>
                            <p>Email : {contact.email}</p>
                            <p>Phone : {contact.phone}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ContactComp;
