import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchForm,
  InputForm,
  ButtonForm,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [desiredImage, setDesiredImage] = useState('');

  const handleChange = ({ target: { value } }) => {
    setDesiredImage(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (desiredImage.trim() === '') {
      return toast.error('Pleas enter image name!');
    }
    onSubmit(desiredImage);
    setDesiredImage('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <ButtonForm type="submit"></ButtonForm>
        <InputForm
          type="text"
          name="desiredImage"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={desiredImage}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
