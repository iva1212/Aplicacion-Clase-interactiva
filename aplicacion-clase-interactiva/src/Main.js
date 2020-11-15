  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    }
    
  }));
function Main(){
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  
    return(
        <div>
            <CssBaseline />
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Codigo : #####
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Main;