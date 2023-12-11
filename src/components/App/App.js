import  Filter  from 'components/ContactFilter/ContactFilter';
import  ContactForm  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import { GlobalStyle } from 'components/GlobalStyles';


export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};