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

export default function RecipeReviewCard() {
  const classes = useStyles();

  

  return (
    <Card className='bg-dark mt-4'>
      
      <CardMedia
          className={classes.media}
          image="https://esports.eldesmarque.com/wp-content/uploads/2019/02/Apex-Legends-Challenge-Twitch.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className='text-white pb-1'>
          <Typography gutterBottom>
            APEX INSANE TOURNAMENT!!
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      <ShareLike />
      
    </Card>
  );
}