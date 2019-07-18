import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
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

//props que recibe el enrutador para conocer el postid que dirige
export default function ExpandedPost(props) {

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
            <Avatar aria-label="Section">
                <img height='42' alt='avatar' src='https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg' />
            </Avatar>
            }
            title={props.title}
            subheader={props.date}
            />
          <CardContent className='text-white pb-1'>
            <Typography gutterBottom>
              {props.description}
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
          </CardContent>
      </Card>
      </div>
      
    );
  
}
