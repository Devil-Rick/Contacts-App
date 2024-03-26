import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contactSelector, showContact, currId, removeContactThunk } from '../../Redux/reducers/contactReducers'
import styles from './contact.module.css'
import User from "../viewUser/user"
import Update from "../updateContact/update"


const ContactComp = (props) => {
    const { update } = props;
    const [updateUser, setUpdateUser] = useState(false);

    const display = useSelector(showContact);
    const contact = useSelector(currId);

    const allcontacts = useSelector(contactSelector)
    let contactItem = allcontacts[contact - 1]

    const dispatch = useDispatch();

    const updFunc = () => {
        setUpdateUser(!updateUser);
    }

    const deleteUser = (id) => {
        dispatch(removeContactThunk(id));
    }


    return (
        <div className={`contact ${display && styles.contact}`}>
            <div>
                <h1>
                    {updateUser
                        ? 'Update User'
                        : 'My Contacts'
                    }
                </h1>

            </div>

            <div className={`contact-container ${display && styles.contactContainer}`}>
                <div className={`left ${display && styles.left}`}>
                    {allcontacts.map(contact => {
                        return (
                            <div key={contact.id} className={`contact-item ${display && styles.contactItem}`} onClick={() => update(contact.id)}>
                                <p>Name : {contact.name}</p>
                                {display ? <></> : <p>Email : {contact.email}</p>}
                                <p>Phone : {contact.phone}</p>
                            </div>
                        )
                    })}
                </div>

                {display &&
                    <div className="right">
                        {updateUser
                            ? <Update updFunc={updFunc} />
                            : <User contactItem={contactItem} updFunc={updFunc} deleteUser={deleteUser} />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ContactComp;
