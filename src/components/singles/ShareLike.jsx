import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box:{
        
        paddingRight: 12,
        paddingBottom: 8,
        textEmphasisColor: 'white'
    }
  }));


export default function ShareLike() {
    const classes = useStyles();
    return (
                <CardActions disableSpacing className='d-flex float-right pl-0 ml-0'>
                <IconButton aria-label="Add to favorites" className={classes.box}>
                    <FavoriteIcon className='text-color-white'/>
                </IconButton>
                <IconButton aria-label="Share" className={classes.box} >
                    <ShareIcon />
                </IconButton>
            </CardActions>
    );
}      