import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import ShareLike from './singles/ShareLike'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  
  media: {
    paddingTop: '56.25%', // 16:9
  },
  title: {
      color: 'white'
  },
  subheader: {
      color: 'white'
  }
  
}));

export default function PostReview(props) {

    const classes = useStyles();
    const ruta = '/secondlvl/post/' + props.postId

    return (
      
      
        <Card className='bg-dark mt-4'>
          <CardMedia
              to={ruta}
              onClick={props.parentMethod}
              component={Link}
              className={classes.media}
              image="https://i.pinimg.com/originals/d7/e1/72/d7e1725b3801fb6cdeb212884c893f79.jpg"
              title="PostPreview"
            />
            <ShareLike />
            <CardHeader
              classes={{
                  title: classes.title,
                  subheader: classes.subheader
              }}
              avatar={
              <Avatar aria-label="Section">
                  <img height='42' alt='avatar' src='https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg' />
              </Avatar>
              }
              title={props.title}
              subheader={props.date}
              />
        </Card>
      
    );
  
}
