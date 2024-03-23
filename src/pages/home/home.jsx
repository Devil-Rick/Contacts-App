import styles from './home.module.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="contact">
            <h1>
                working contacts page
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