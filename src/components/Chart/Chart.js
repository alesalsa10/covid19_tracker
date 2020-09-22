import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { dailyData } from '../../api/httphook';

import styles from './Chart.module.css';

export default function Chart() {
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dailyData();
      setDataHistory(response);
    };
    fetchData();
  }, [dataHistory]);

  const lineChart =
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
          {lineChart}
      </div>
  );
}
