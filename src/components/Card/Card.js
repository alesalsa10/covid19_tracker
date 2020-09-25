import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import {
  Card as CardStyle,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { httpHook, getCountryInfo } from '../../api/httphook';
import { parseISO, format } from 'date-fns';

const Card = ( country ) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (country.country === 'Global') {
        const response = await httpHook();
        setData(response);
      } else {
        const response = await getCountryInfo(country.country);
        setData(response);
      }
    };
    fetchData();
  }, [country.country]);

  return (
    <div>
      {data && (
        <Grid container justify='center'>
          <Grid
            item
            component={CardStyle}
            xs={12}
            md={2}
            className={cx(styles.card, styles.Infected)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Infected
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  end={data.confirmed.value}
                  duration={2}
                  start={0}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {format(parseISO(data.lastUpdate), 'PPPP').toString()}
              </Typography>
              <Typography variant='body2'>
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={CardStyle}
            xs={12}
            md={2}
            className={cx(styles.card, styles.Recovered)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Recovered
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  end={data.recovered.value}
                  duration={2}
                  start={0}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {format(parseISO(data.lastUpdate), 'PPPP').toString()}
              </Typography>
              <Typography variant='body2'>
                Number of recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={CardStyle}
            xs={12}
            md={2}
            className={cx(styles.card, styles.Deaths)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Deaths
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  end={data.deaths.value}
                  duration={2}
                  start={0}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {format(parseISO(data.lastUpdate), 'PPPP').toString()}
              </Typography>
              <Typography variant='body2'>
                Number of deaths from COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Card;
