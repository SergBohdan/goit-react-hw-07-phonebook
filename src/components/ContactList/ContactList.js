import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactSlice';

import { getFilter } from 'redux/filterSlice';
import { List, ListBtn, ListItem } from './ContactListStyled';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ListBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ListBtn>
        </ListItem>
      ))}
    </List>
  );
};