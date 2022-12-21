import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import React, { useState, useEffect } from 'react';
import { CommonWrapper, PhonebookWrapper, ContactsWrapper } from './App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('state')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);


  useEffect(() => {
        localStorage.setItem('state', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    let isExist = [...contacts].filter(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (+isExist !== 0) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevValue => [...prevValue, contact]);
  };

  const handleDelete = deleteId => {
    setContacts(prevValue => prevValue.filter(({ id }) => id !== deleteId));
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <CommonWrapper>
      <PhonebookWrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={contact => addContact(contact)} />
      </PhonebookWrapper>

      <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </ContactsWrapper>
    </CommonWrapper>
  );
};
