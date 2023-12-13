import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import { List, ListBtn, ListItem, ListName } from './ContactListStyled';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <p>
          <ListName>{name}:</ListName>  {phone}
          </p>
          <ListBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ListBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;