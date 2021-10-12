import React, { Component } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  short = require("short-uuid");

  addContact = ({ name, number }) => {
    const contact = this.state.contacts;
    const id = this.short.generate;
    console.log(contact.find((contact) => contact.name === name));
    if (!contact.find((contacts) => contacts.name === name)) {
      this.setState(({ contacts }) => ({
        contacts: [{ id: id, name: name, number: number }, ...contacts],
      }));
    } else alert(`${name} is already in contacts.`);
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  renderList = () => {
    const { contacts, filter } = this.state;
    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  filterState = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const {
      addContact,
      filterState,
      renderList,
      removeContact,
      state: { filter },
    } = this;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} change={filterState} />
        <Contacts list={renderList()} remove={removeContact} />
      </div>
    );
  }
}
export default App;
