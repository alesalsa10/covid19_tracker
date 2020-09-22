import React, { useEffect, useState } from 'react';
import { Select as SelectStyle, MenuItem } from '@material-ui/core';
import { getCountries } from '../../api/httphook';

const Select = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchData();
  }, [countries]);

  return (
    <SelectStyle
      labelId='country-picker'
      id='country-picker'
      value='global'
      key='country-picker'
    >
      <MenuItem value='global' key='global-key'>
        Global
      </MenuItem>
      {countries.map((country) => (
        <MenuItem key={country} value={country}>
          {country}
        </MenuItem>
      ))}
    </SelectStyle>
  );
};

export default Select;
