import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions/contactsActions';

const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addNewContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in your phonebook!`);
      return;
    }

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form className={styles.form} type="submit" onSubmit={addNewContact}>
      <label className={styles.label} htmlFor={nameId}>
        Name
        <input
          className={styles.input}
          id="nameId"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label} htmlFor={numberId}>
        Number
        <input
          className={styles.input}
          id="numberId"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
