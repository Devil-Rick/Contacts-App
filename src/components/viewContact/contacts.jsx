import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contactThunk, contactSelector, showContact } from '../../Redux/reducers/contactReducers'
import styles from './contact.module.css'


const ContactComp = (props) => {
    const { update, contact } = props;
    const display = useSelector(showContact);

    const allcontacts = useSelector(contactSelector)
    let contactItem = allcontacts[contact - 1]


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactThunk());
    }, [dispatch])

    return (
        <>
            <div>
                Contacts Component Page
            </div>

            <div className="contact-container">
                <div className="left">
                    {allcontacts.map(contact => {
                        return (
                            <div key={contact.id} className="contact-item" onClick={() => update(contact.id)}>
                                <p>Name : {contact.name}</p>
                                <p>Email : {contact.email}</p>
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
                                <button className={styles.updateBtn}> UPDATE </button>
                                <button className={`${styles.updateBtn} ${styles.delBtn}`}> DELETE </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default ContactComp;
