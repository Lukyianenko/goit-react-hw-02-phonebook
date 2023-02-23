import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import AddContscts from './BookContacts/AddContact';
import { ListContacts } from './BookContacts/ListContacts';
import { Filter } from './BookContacts/FilterContacts';
import { Title } from './BookContacts/BookContacts.styled';

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filtr: '',
  }

  onSubmitAddNewContact = (contact) => {
    const includesName = this.state.contacts.map(item => {return (item.name.toLowerCase())});
    console.log(includesName);
    if(includesName.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`)
          }  else {
            const id = nanoid();
    this.setState({
      contacts: [...this.state.contacts, {id, ...contact}]
    })
          }
    
  }

  OnChangeFiltr = (e) => {
        this.setState({
          filtr: e.currentTarget.value,
        }) 
  }

  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }
  
  
  
  render() {

    const normalizeFiltr = this.state.filtr.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFiltr));

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Title>Phonebook</Title>
      <AddContscts onSubmit={this.onSubmitAddNewContact} />
      <Filter value={this.state.filtr} onChange={this.OnChangeFiltr}/>
      <ListContacts contacts={visibleContacts} onDelete={this.onDeleteContact}/>
      

      </div>
    );
  }
  
};

export default App;

App.propTypes = {
  state: PropTypes.arrayOf(PropTypes.exact({
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })),
    filtr: PropTypes.string,
  })),
}