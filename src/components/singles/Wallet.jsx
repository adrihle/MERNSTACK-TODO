import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },}
  }));

export default function Wallet(props) {
    const classes = useStyles();
    return(
        
        <div className='d-flex align-items-center'>
          <Typography className={classes.title} variant="h6" noWrap>
            10.000 
          </Typography>
          <i className="fas fa-coins pl-1"></i>
        </div>

    );
} 