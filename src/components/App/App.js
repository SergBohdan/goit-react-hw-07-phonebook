import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { GlobalStyle } from 'components/GlobalStyles';
import ContactFilter from 'components/ContactFilter/ContactFilter';

function App() {
  return (
       <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <ContactFilter />
          <ContactList />
          <GlobalStyle />
        </div>
    );
}

export default App;
