import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],

    filter: '',
    name: '',
    number: '',
  }

  handleInput = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.addContact(this.state);
    this.formReset();
  }

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  addContact = (data) => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  handleFilter = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
          <ContactForm startName={this.state.name} startNumber={this.state.number} handleInput={this.handleInput} onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
          <Filter startFilter={this.state.filter} handleFilter={this.handleFilter} />
          <ContactList contacts={this.state.contacts} filter={this.state.filter} />
      </div>
    )
  }
}