import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';

export const httpHook = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const dailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);

    const data = response.data.map((cases) => ({
      confirmed: cases.confirmed.total,
      deaths: cases.deaths.total,
      date: cases.reportDate,
    }));
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

export const getCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);

    const countries = response.data.countries.map(country => country.name)
    return countries;
  } catch (error) {
    console.log('error', error);
  }
};
