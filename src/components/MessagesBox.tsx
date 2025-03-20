import styles from '../styles/MessagesBox.module.css';
import MessagesView from './MessagesView';
import InputField from './InputField';


export default function MessagesBox() {
    return (
        <div className={styles.messagesBox}	>
            <MessagesView />
            <InputField />
        </div>
    );
}