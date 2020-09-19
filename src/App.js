import React, { useEffect, useState } from 'react';
import Chart from './components/Chart/Chart';
import Card from './components/Card/Card';
import {parseISO, format} from 'date-fns';

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
      <div className='cards-container'>
        {data && (
          <div>
            <Card
              category='Infected'
              numbers={data.confirmed.value}
              date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            />
            <Card
              category='Recovered'
              numbers={data.recovered.value}
              date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            />
            <Card
              category='Deaths'
              numbers={data.deaths.value}
              date={format(parseISO(data.lastUpdate), 'PPPP').toString()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
