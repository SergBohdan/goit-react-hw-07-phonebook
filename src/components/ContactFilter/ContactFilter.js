import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" name={filter} value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;