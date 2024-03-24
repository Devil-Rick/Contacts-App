import { useEffect, useState } from "react"
import styles from './update.module.css'
import { useSelector } from "react-redux"
import { contactSelector, currId } from "../../Redux/reducers/contactReducers"

const Update = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()

    const contacts = useSelector(contactSelector);
    const id = useSelector(currId)
    const contact = contacts[id - 1]


    return (
        <div className={styles.updateContainer}>
            <h1>
                Update Contact
            </h1>
            <div className={`contact contact-item ${styles.contact}`}>
                <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />

                <form action="" className={styles.contactUpdate}>
                    <div className={styles.updateComp}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} defaultValue={contact.name} />
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={contact.email} />
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} defaultValue={contact.phone} />
                    </div>

                    <div className={styles.updateComp}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={(e) => setCity(e.target.value)} defaultValue={contact.address.city} />
                    </div>

                    <div className={styles.btnHolder}>
                        <button className={styles.updateBtn}> UPDATE </button>

                        <button className={`${styles.updateBtn} ${styles.delBtn}`}> BACK </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update