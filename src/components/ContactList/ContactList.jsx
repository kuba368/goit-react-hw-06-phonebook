import React from 'react';
import { Notification } from 'components/Notification/Notification';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/actions/contactsActions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  const removeContactItem = id => {
    return dispatch(removeContact(id));
  };

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={styles.wrapper}>
          {filteredContacts.map(contact => {
            return (
              <li className={styles.text} key={contact.id}>
                <span>{`${contact.name}: ${contact.number}`}</span>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => removeContactItem(contact.id)}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="You don't have this contact." />
      )}
    </>
  );
};

export default ContactList;
