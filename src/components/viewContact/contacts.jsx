import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { contactThunk, contactSelector, showContact, currId } from '../../Redux/reducers/contactReducers'
import styles from './contact.module.css'


const ContactComp = (props) => {
    const { update } = props;
    const display = useSelector(showContact);
    const contact = useSelector(currId);

    const allcontacts = useSelector(contactSelector)
    let contactItem = allcontacts[contact - 1]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactThunk());
    }, [dispatch])

    return (
        <div className={`contact ${display && styles.contact}`}>
            <div>
                <h1>
                    My Contacts
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
                        <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />
                        <div className={styles.contactView}>
                            <div className={styles.viewComp}>
                                <h6>Name</h6>
                                <h4>{contactItem.name}</h4>
                            </div>

                            <div className={styles.viewComp}>
                                <h6>Email</h6>
                                <h4>{contactItem.email}</h4>
                            </div>

                            <div className={styles.viewComp}>
                                <h6>Phone</h6>
                                <h4>{contactItem.phone}</h4>
                            </div>

                            <div className={styles.viewComp}>
                                <h6>City</h6>
                                <h4>{contactItem.address.city}</h4>
                            </div>

                            <div className={styles.btnHolder}>
                                <Link to='/updateContact'>
                                    <button className={styles.updateBtn}> UPDATE </button>
                                </Link>

                                <button className={`${styles.updateBtn} ${styles.delBtn}`}> DELETE </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ContactComp;
