import styles from './home.module.css';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { contactThunk } from '../../Redux/thunk/thunk';
import { useEffect } from "react";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactThunk());
    })

    return (
        <div className="contact">
            <h1>
                Welcome <br/> User
            </h1>

            <div>
                <Link to='/addContact'>
                    <button className={styles.homeBtn}>
                        <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />
                        New Contact
                    </button>
                </Link>

                <Link to='/viewContact'>
                    <button className={styles.homeBtn}>
                        <img className="logo" src={require("../../assets/images/contact.png")} alt="add logo" />
                        My Contacts
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;