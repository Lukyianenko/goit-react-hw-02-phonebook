import PropTypes from 'prop-types';

export const ListContacts = ({contacts, onDelete}) => (
    <div>
        <h2>Contacts</h2>
        <ul>
        {contacts.map(({ id, name, number }) => (<li key={id}>{name}: {number} 
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>))}
        </ul>
    </div>
)

ListContacts.propTyoes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func,
}