import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ShareLike from './singles/ShareLike'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { red } from '@material-ui/core/colors'
import CommentBox from './CommentBox'

const useStyles = makeStyles(theme => ({
  
  media: {
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
      color: 'white'
  },
  subheader: {
      color: 'white'
  }
  
}));

//props que recibe el enrutador para conocer el postid que dirige
export default function PostReview(props) {

    const classes = useStyles();

    
    
    return (
      
      <div>
        <Card className='bg-dark mt-4'>
        <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/originals/d7/e1/72/d7e1725b3801fb6cdeb212884c893f79.jpg"
            title="Contemplative Reptile"
          />
          <ShareLike />
          <CardHeader
            classes={{
                title: classes.title,
                subheader: classes.subheader
            }}
            avatar={
            <Avatar aria-label="Section" className={classes.avatar}>
                R
            </Avatar>
            }
            title="Amazing kills by adrihfly!"
            subheader="September 14, 2019"
            />
          <CardContent className='text-white pb-1'>
            <Typography gutterBottom>
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
          </CardContent>
      </Card>
      <CommentBox />
      </div>
      
    );
  
}
