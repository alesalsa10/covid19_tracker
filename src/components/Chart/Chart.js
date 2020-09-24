import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { dailyData, getCountryInfo } from '../../api/httphook';
import { Grid } from '@material-ui/core';

import styles from './Chart.module.css';

export default function Chart(country) {
  const [dataHistory, setDataHistory] = useState([]);
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (country.country === 'Global') {
        const response = await dailyData();
        setDataHistory(response);
      } else {
        const response = await getCountryInfo(country.country);
        setCountryInfo(response);
      }
    };
    fetchData();
  }, [country.country]);

  const barGraph = countryInfo ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Cases',
            data: [
              countryInfo.confirmed.value,
              countryInfo.recovered.value,
              countryInfo.deaths.value,
            ],
            backgroundColor: [
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,0,0.5)',
            ],
          },
        ],
      }}
    />
  ) : null;

  const lineGraph =
    dataHistory && dataHistory.length ? (
      <Line
        data={{
          labels: dataHistory.map(({ date }) => date),
          datasets: [
            {
              label: 'Infected',
              data: dataHistory.map(({ confirmed }) => confirmed),
              fill: true,
              backgroundColor: 'rgba(0,0,255,0.5)',
              borderColor: 'rgba(0,0,255,0.5)',
            },
            {
              label: 'Deaths',
              data: dataHistory.map(({ deaths }) => deaths),
              fill: false,
              borderColor: 'rgba(255,0,0,0.5)',
            },
          ],
        }}
      />
    ) : null;

  return (
    <div className={styles.graph}>
      <Grid container alignItems='center' justify='center'>
        <Grid item xs={12} md={8}>{country.country === 'Global' ? lineGraph : barGraph}</Grid>
      </Grid>
    </div>
  );
}
