import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactslice';
import { ClearBtn, List, ListBtn, ListItem } from './ContactListStyled';
import { getFilter } from 'redux/filterSlice'; 

const ContactList = ({ onClearContacts }) => {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filtered.toLowerCase())
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
      <ClearBtn onClick={onClearContacts}>Clear contacts</ClearBtn>
    </List>
  );
};

export default ContactList;
