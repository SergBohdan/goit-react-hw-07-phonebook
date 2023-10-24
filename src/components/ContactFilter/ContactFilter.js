import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../redux/filterSlice';

const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label>
    <input
      type="text"
      name={filter}
      placeholder="Search contacts"
      value={filter}
      onChange={onChange}
    />
    </label>
  );
};

export default ContactFilter;
