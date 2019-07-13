import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShareLike from './singles/ShareLike'

const useStyles = makeStyles(theme => ({
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
}));



export default function PostReview(props) {

  
    const classes = useStyles();
    return (
      
      <Card className='bg-dark mt-4'>
        
        <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/originals/d7/e1/72/d7e1725b3801fb6cdeb212884c893f79.jpg"
            title="Contemplative Reptile"
          />
          <CardContent className='text-white pb-1'>
            <Typography gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
        <ShareLike />
        
      </Card>
    );
  
}
