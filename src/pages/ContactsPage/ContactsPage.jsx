import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactsPage.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import {
  selectorContacts,
  selectorContactsIsloading,
  selectorFilter,
} from 'redux/selector';
import {
  fetchContacts,
  fetchContactsAdd,
  fetchContactsDelete,
} from 'redux/phonebook.thunk';
import { filterContact } from 'redux/phonebookSlice';

const ContactsPage = () => {
  const filter = useSelector(selectorFilter);

  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorContactsIsloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContacts = data => {
    if (contacts.findIndex(contact => data.name === contact.name) !== -1) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(fetchContactsAdd(data));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  const handleDeleteContacts = contactsId => {
    dispatch(fetchContactsDelete(contactsId));
  };

  return (
    <div className={css.ContactsPageStyle}>
      <h1 className={css.TitlePhonebook}>Phonebook</h1>
      {isLoading && <p>Please wait...</p>}
      <ContactForm handleSubmit={handleAddContacts} />
      <h2 className={css.TitlePhonebook}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        phonebookContacts={getFilteredContacts()}
        handleDelete={handleDeleteContacts}
      />
    </div>
  );
};

export default ContactsPage;
