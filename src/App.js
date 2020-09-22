import React, { useEffect, useState } from 'react';
import Chart from './components/Chart/Chart';
import Card from './components/Card/Card';
import { parseISO, format } from 'date-fns';
import { Grid } from '@material-ui/core';
import Select from './components/Select/Select';

import styles from './App.module.css';

import { httpHook, dailyData } from './api/httphook';

function App() {
  const [data, setData] = useState(null);
  const [dataHistory, setDataHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await httpHook();
      setData(response.data);
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dailyData();
      setDataHistory(response.data);
    };
    fetchData();
  }, [dataHistory]);

  return (
    <div className={styles.container}>
      {data && (
        <Grid container justify='center'>
          <Card
            category='Infected'
            numbers={data.confirmed.value}
            date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            text='Number of active cases of COVID-19'
          />
          <Card
            category='Recovered'
            numbers={data.recovered.value}
            date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            text='Number of recoberies from COVID-19'
          />
          <Card
            category='Deaths'
            numbers={data.deaths.value}
            date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            text='Number of deaths caused by COVID-19'
          />
        </Grid>
      )}
      {dataHistory && (
        <Chart data={dataHistory}/>
      )}
    </div>
  );
}

export default App;
