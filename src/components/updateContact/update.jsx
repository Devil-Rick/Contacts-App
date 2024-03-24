import { useEffect, useState } from "react"
import styles from './contact.module.css'

const Update = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()


    return (
        <form action="" className={styles.contactUpdate}>
            <div className={styles.updateComp}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles.updateComp}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={styles.updateComp}>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)}/>
            </div>

            <div className={styles.updateComp}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" onChange={(e) => setCity(e.target.value)}/>
            </div>
        </form>
    )
}