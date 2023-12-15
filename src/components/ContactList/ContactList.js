import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import {  selectVisibleContacts } from 'redux/selectors';
import { List, ListBtn, ListItem, ListName } from './ContactListStyled';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
 

  const filteredContacts =  useSelector(selectVisibleContacts);

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