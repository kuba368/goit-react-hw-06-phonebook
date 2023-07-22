import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions/filterActions';

const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name: </p>
      <input
        className={styles.input}
        type="text"
        onChange={filterValue}
      ></input>
    </div>
  );
};

export default Filter;
