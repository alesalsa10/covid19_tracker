import React, { useEffect, useState } from 'react';
import Select from './components/Select/Select';
import {Typography} from '@material-ui/core';

import styles from './App.module.css';

import { httpHook } from './api/httphook';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await httpHook();
      setData(response.data);
    };
    fetchData();
  }, [data]);

  return (
    <div className={styles.container}>
      <Typography variant='h3' component='h3' align='center'>
          COVID-19 Tracker
      </Typography>
      <Select/>
    </div>
  );
}

export default App;
