import { useSelector, useDispatch } from 'react-redux';
import { formSubmit } from './redux/actions';
import ContactForm from './components/contactForm/contactForm';
import Filter from './components/filter/filter';
import ContactList from './components/contactList/contactList';
import './Phonebook.css';

function Phonebook() {
  const contacts = useSelector(state => state.contactsItem);
  const dispatch = useDispatch();

  const handleFormSubmit = data =>
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert(data.name + ' is already in contacts')
      : dispatch(formSubmit(data));

  return (
    <div className="container">
      <h1 className="title">phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
      <h2 className="title-contacts">contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Phonebook;
