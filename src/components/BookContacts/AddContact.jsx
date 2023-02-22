import { Component } from "react"; 

class AddContscts extends Component {
    state = {
        name: '',
        number: '',
    }

    onInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
          [name]: value,
        }) 
      }
    
      onSubmitContact = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
      }

      reset = () => {
        this.setState({
            name: '',
            number: '',
        })
      }

render() {
    return (
    <form onSubmit={this.onSubmitContact}>
          <label>
            Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore        d'Artagnan"
          required
        />
        </label>
        <label>
            Number
        <input
         type="tel"
         name="number"
         value={this.state.number}
         onChange={this.onInputChange}
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         required
        />
        </label>
        <button type="submit">Add contact</button>
        </form>
        )}
}

export default AddContscts;