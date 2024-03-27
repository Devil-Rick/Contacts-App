import { useDispatch } from 'react-redux';
import { contactAction } from '../../Redux/reducers/contactReducers';
import styles from './user.module.css'
const User = ({contactItem, updFunc, deleteUser}) => {
    const dispatch = useDispatch();
    const view = () => {
        dispatch(contactAction.setShowContact())
    }

    return (
        <>
            <img className="logo" src={require("../../assets/images/add.png")} alt="add logo" />
            <img className="logo cross" onClick={view} src={require("../../assets/images/cross.png")} alt="cross" />
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
                    <button className={styles.updateBtn} onClick={updFunc}>
                        UPDATE
                    </button>
                    <button className={`${styles.updateBtn} ${styles.delBtn}`} onClick={() => deleteUser(contactItem.id)}> DELETE </button>
                </div>
            </div>
        </>
    );
}

export default User;