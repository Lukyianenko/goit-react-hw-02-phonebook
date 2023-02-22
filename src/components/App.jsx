import { Component } from "react";
import { nanoid } from 'nanoid';
import AddContscts from './BookContacts/AddContact';

class App extends Component {
  state = {
    contacts: [],
  }

  onSubmitAddNewContact = (contact) => {
    const id = nanoid();
    this.setState({
      contacts: [...this.state.contacts, {id, ...contact}]
    })
  }
  
  
  render() {
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

      <div>
      <h2>Contacts</h2>
      <ul>
      {this.state.contacts.map(item => (<li key={item.id}>{item.name}: {item.number}</li>))}
      </ul>
      </div>

      </div>
    );
  }
  
};

export default App;
