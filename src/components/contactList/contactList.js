import React from 'react';
import { deleteContact } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import './contactList.css';

function ContactList() {
  const allContacts = useSelector(state => state.contactsItem);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterItems = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const contacts = filterItems(allContacts, filter);

  return (
    <ul className="contact-list">
      {contacts.length === 0 ? (
        <p className="contact-item__text">
          There are no contacts on your list yet
        </p>
      ) : (
        contacts.map(item => (
          <li className="contact-item" key={item.id}>
            <p className="contact-item__text">
              {item.name} :
              <span className="contact-item__number">{item.number}</span>
            </p>
            <button
              className="btnDelete"
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;

// const mapStateToProps = ({ contactsItem, filter }) => ({
//   contacts: filterItems(contactsItem, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   handleBtnDelete: id => dispatch(deleteContact(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
//   deleteContact: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
