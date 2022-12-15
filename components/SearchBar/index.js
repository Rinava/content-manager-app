import { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        type='search'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit'>
        Search
        {/* TODO add search icon */}
      </button>
    </form>
  );
};

export default SearchBar;
