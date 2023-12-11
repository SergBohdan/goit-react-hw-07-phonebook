import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindInput, FormBtn, FormStyle } from "./ContactFormStyled";
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';


const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name: contactName,
        number,
      })
    );

    setContactName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { value, name } = evt.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label>
        Name
        <FindInput
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <FindInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <FormBtn type="submit">Add contact</FormBtn>
    </FormStyle>
  );
};

export default ContactForm;