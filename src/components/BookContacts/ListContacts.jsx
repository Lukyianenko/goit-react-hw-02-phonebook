import PropTypes from 'prop-types';

export const ListContacts = ({contacts}) => (
    <div>
        <h2>Contacts</h2>
        <ul>
        {contacts.map(({ id, name, number }) => (<li key={id}>{name}: {number}</li>))}
        </ul>
    </div>
)

ListContacts.propTyoes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired
}