import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './add.module.css'

const Add = ({view}) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()


    return (
        <div className={styles.addContainer}>
            <div className={`contact contact-item ${styles.contact}`}>
                <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />

                <form action="" className={styles.contactAdd}>
                    <div className={styles.addComp}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Name"  />
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={(e) => setCity(e.target.value)} placeholder="City"/>
                    </div>

                    <div className={styles.btnHolder}>
                        <button className={styles.addBtn}> Add </button>

                        <Link to='/viewContact'>
                            <button className={`${styles.addBtn} ${styles.delBtn}`} onClick={view}> MY CONTACTS </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add 