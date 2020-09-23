import React, { useEffect, useState } from 'react';
import { Select as SelectStyle, MenuItem, Grid } from '@material-ui/core';
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
    <Grid container spacing={0} alignItems='center' justify='center'>
      <Grid item xs={8} md={6} >
        <SelectStyle
          labelId='country-picker'
          id='country-picker'
          value='global'
          key='country-picker'
          fullWidth={true}
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
      </Grid>
    </Grid>
  );
};

export default Select;
