import { useState } from "react"
import styles from './update.module.css'
import { useDispatch, useSelector } from "react-redux"
import { contactSelector, currId } from "../../Redux/reducers/contactReducers"
import { updateContactThunk } from "../../Redux/thunk/thunk"

const Update = ({ updFunc }) => {

    const contacts = useSelector(contactSelector);
    const id = useSelector(currId)
    const contact = contacts[id]

    const dispatch = useDispatch();

    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)
    const [phone, setPhone] = useState(contact.phone)
    const [city, setCity] = useState(contact.address.city)

    const updateUser = (e) => {
        e.preventDefault();
        dispatch(updateContactThunk({id : contact.id, name, email, phone, city,}))
    }

    return (
        <div className={styles.updateContainer}>
            <div className={`contact contact-item ${styles.contact}`}>
                <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />
                <form action="" className={styles.contactUpdate} onSubmit={updateUser}>
                    <div className={styles.updateComp}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} defaultValue={contact.name} required/>
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={contact.email} required/>
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} defaultValue={contact.phone} required/>
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={(e) => setCity(e.target.value)} defaultValue={contact.address.city} required/>
                    </div>

                    <div className={styles.btnHolder}>
                        <button className={styles.updateBtn}> UPDATE </button>
                        <button className={`${styles.updateBtn} ${styles.delBtn}`} onClick={updFunc}>
                            BACK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update 