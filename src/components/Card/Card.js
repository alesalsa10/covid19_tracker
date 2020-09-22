import React from 'react';
import styles from './Card.module.css';
import {
  Card as CardStyle,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Card = ({ category, numbers, date, text }) => {
  return (
    <Grid
      item
      component={CardStyle}
      xs={12}
      md={3}
      className={cx(styles.card, styles[category])}
    >
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {category}
        </Typography>
        <Typography variant='h5'>
          <CountUp end={numbers} duration={2} start={0} separator=',' />
        </Typography>
        <Typography color='textSecondary'>{date}</Typography>
        <Typography variant='body2'>{text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Card;
