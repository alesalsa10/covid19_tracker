import React, { useEffect, useState } from 'react';
import { Select as SelectStyle, MenuItem, Grid } from '@material-ui/core';
import { getCountries } from '../../api/httphook';
import Chart from '../Chart/Chart';
import Card from '../Card/Card';

const Select = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Global');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchData();
  }, [countries]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <Card country={country} />
      <Grid container spacing={0} justify='center'>
        <Grid item xs={8} md={6}>
          <SelectStyle
            labelId='country-picker'
            id='country-picker'
            value={country}
            key='country-picker'
            fullWidth={true}
            onChange={handleChange}
          >
            <MenuItem value={'Global'} key='global-key'>
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
      <Chart country={country} />
    </div>
  );
};

export default Select;
