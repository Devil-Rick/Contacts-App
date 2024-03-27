import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contactSelector, showContact, currId } from '../../Redux/reducers/contactReducers'
import { removeContactThunk } from "../../Redux/thunk/thunk"
import styles from './contact.module.css'
import User from "../viewUser/user"
import Update from "../updateContact/update"


const ContactComp = (props) => {
    const { update } = props;
    const [updateUser, setUpdateUser] = useState(false);

    const display = useSelector(showContact);

    const allcontacts = useSelector(contactSelector)
    console.log(allcontacts, 'all contacts');

    let contactItem = allcontacts[useSelector(currId)];
    console.log(useSelector(currId),'-', contactItem, 'contact item');

    const dispatch = useDispatch();


    const updFunc = () => {
        setUpdateUser(!updateUser);
    }

    const deleteUser = (id) => {
        dispatch(removeContactThunk(id));
        // dispatch(contactAction.setShowContact())
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
                    {allcontacts.map((c, index) => {
                        return (
                            <div key={c.id} className={`contact-item ${display && styles.contactItem}`} onClick={() => update(c.id, index)}>
                                <p>Name : {c.name}</p>
                                {display ? <></> : <p>Email : {c.email}</p>}
                                <p>Phone : {c.phone}</p>
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
