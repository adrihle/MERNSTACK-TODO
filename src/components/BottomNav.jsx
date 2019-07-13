import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#343a40',
    selected: 'secondary'
  },
  selected:{
    color: 'white'
  }
});



export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.selected} label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction className={classes.selected} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.selected} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction className={classes.selected} label="Folder" value="folder" icon={<Icon>folder</Icon>} />
    </BottomNavigation>
  );
}