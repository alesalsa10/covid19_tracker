import React, { useEffect, useState } from 'react';
import Select from './components/Select/Select';

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
      <Select/>
    </div>
  );
}

export default App;
