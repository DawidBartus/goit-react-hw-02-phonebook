import React from 'react';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateContactList = props => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === props.name.toLowerCase()
      )
    ) {
      alert(`${props.name} is in your contact list`);
    } else {
      contacts.push(props);
      this.setState({ contacts: contacts });
    }
  };

  deleteContact = e => {
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => contact.id !== e.target.id);
    this.setState({ contacts: newContact });
  };

  findContact = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.updateContactList} />

        <h2>Contacts</h2>
        <Filter onChange={this.findContact} />
        <ContactList
          contacts={this.state.contacts}
          onClick={this.deleteContact}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
