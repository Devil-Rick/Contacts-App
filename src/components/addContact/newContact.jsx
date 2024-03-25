import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './add.module.css'

const Add = ({view, id, add}) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()

    const addCon = (e) => {
        e.preventDefault();
        const data = {
            id: id+1,
            name,
            email,
            phone,
            address : {
                city,
            }
        }
        console.log(data);
        add(data);
    }


    return (
        <div className={styles.addContainer}>
            <div className={`contact contact-item ${styles.contact}`}>
                <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />

                <form action="" onSubmit={addCon} className={styles.contactAdd}>
                    <div className={styles.addComp}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Name"  required/>
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required/>
                    </div>

                    <div className={styles.addComp}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={(e) => setCity(e.target.value)} placeholder="City" required/>
                    </div>

                    <div className={styles.btnHolder}>
                        <button className={styles.addBtn} type="Submit"> Add </button>

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