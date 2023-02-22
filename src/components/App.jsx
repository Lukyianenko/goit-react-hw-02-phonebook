import { Component } from "react";
import { nanoid } from 'nanoid';
import AddContscts from './BookContacts/AddContact';
import { ListContacts } from './BookContacts/ListContacts';
import { Filter } from './BookContacts/FilterContacts';

class App extends Component {
  state = {
    contacts: [],
    filtr: '',
  }

  onSubmitAddNewContact = (contact) => {
    const id = nanoid();
    this.setState({
      contacts: [...this.state.contacts, {id, ...contact}]
    })
  }

  OnChangeFiltr = (e) => {
        this.setState({
          filtr: e.currentTarget.value,
        }) 
  }

  
  
  
  render() {

    const normalizeFiltr = this.state.filtr.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFiltr));

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >

      <AddContscts onSubmit={this.onSubmitAddNewContact} />
      <Filter value={this.state.filtr} onChange={this.OnChangeFiltr}/>
      <ListContacts contacts={visibleContacts}/>
      

      </div>
    );
  }
  
};

export default App;
