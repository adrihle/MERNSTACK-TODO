import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { lightBlue } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    //Cada component acepta unos props en particular que afectan a diferentes aspectos del componente
    textField: {
        marginLeft: theme.spacing(3),
        width: '75%',
        //Con esto se override los colores por defecto
        [`& fieldset`]: {
            borderColor: 'white',
          } 
    },
    selected: {
        color: lightBlue[600],
        width: '25%'
    },
    input: {
        color: 'white',
    },
    floatingLabelFocusStyle: {
        color: 'white'
    },
    box: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        bottom: '55px',
        backgroundColor: '#343a40',
        justifyContent: 'between'
    }
}));


const theme = createMuiTheme({
    palette: {
      primary: { main: lightBlue[300] }, // Purple and green play nicely together.
    },
});


export default function CommentBox(){
    const classes = useStyles();
    
    return(
        <div className={classes.box}>
            <ThemeProvider theme={theme}>
                <TextField
                    id="outlined-textarea"
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    InputProps={{
                        className: classes.input,
                    }}
                    label="Go Comment!"
                    placeholder="Comment"
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <IconButton className={classes.selected}>
                    <i className="far fa-paper-plane fa-flip-horizontal text-white"></i>
                </IconButton>
            </ThemeProvider>
        </div>
    );
}