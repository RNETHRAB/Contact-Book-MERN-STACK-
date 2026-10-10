import React, {useEffect, useState} from 'react';
import api from './api';
import ContactForm from './contactform';
import './App.css';
import ContactList from './contactlist';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [editContact , seteditContact] = useState(null);

  console.log(editContact);
  //load all contacts
  const fetchContacts = async () => {
    const res = await api.get("/");
    setContacts(res.data);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  //add new contact
 const addcontact = async (data) => {
  await api.post('/', data);
  fetchContacts();
 };

 //delete contact
 const deletecontact = async (id) => {
  await api.delete(`/${id}`);
  fetchContacts();
 };
 //update contact
  const updatecontact = async (data) => {
    await api.put(`/${editContact._id}`, data);
    seteditContact(null);
    fetchContacts();
  };

  return (
    <div>
      <ContactForm onSubmit={editContact ? updatecontact : addcontact} Existing = {editContact} />
      <ContactList contacts={contacts} onDelete={deletecontact} onEdit={seteditContact} />
    </div>
  );
};

export default App
