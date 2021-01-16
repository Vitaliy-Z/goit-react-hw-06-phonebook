import React from 'react';
import { deleteContact } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './contactList.css';

function ContactList({ contacts, handleBtnDelete }) {
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
              onClick={() => handleBtnDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

const filterItems = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contactsItem, filter }) => ({
  contacts: filterItems(contactsItem, filter),
});

const mapDispatchToProps = dispatch => ({
  handleBtnDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
