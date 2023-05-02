import React from "react";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";

import { Filter } from "components/Filter/Filter";

import defaultUsers from "../assets/defaultUsers"

export class App extends Component {
  
  state = {
    contacts: [],    
    filter:'',    
  }
 
  
  componentDidMount() {

    const contacts = JSON.parse(localStorage.getItem("contacts")) || defaultUsers;
    this.setState({ contacts });  
   
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (
      prevState.contacts.length !== 0 &&
      prevState.contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      console.log("in componentDidUpdate");
    }
     
  }
  addNewContact = (abonent) => {
    console.log(abonent);
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === abonent.name)) {
      alert(`${abonent.name} is already in contacts`);
    } else {      
      this.setState(prevState => ({ contacts: [...prevState.contacts, abonent] }))
      
       
    }
  }
  handleFilter = (event) => {    
    const { value } = event.currentTarget;
    this.setState({ filter: value });    
  }
  makeFilterList = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalFilter));    
  }
  onClear = () => {
    this.setState({filter:''})
  }
  onDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    
  } 
  render() {
    const { filter} = this.state;    
    const forPrint = this.makeFilterList();
    
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} onClear={this.onClear } />
        <ContactList contacts={forPrint} value={filter } onChange={this.handleFilter} onDelete={this.onDelete} />
    </div>
  );
  }
  
};
