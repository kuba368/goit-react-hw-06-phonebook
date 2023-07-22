import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';
import Filter from 'components/Filter/Filter';
import styles from './App.module.css';
import { useSelector } from 'react-redux';

const App = () => {
  const contactsList = useSelector(state => state.contacts);

  return (
    <>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <h1 className={styles.header}>Contacts</h1>
      {contactsList.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="Your phonebook is empty!" />
      )}
    </>
  );
};

export default App;
