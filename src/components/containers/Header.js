/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'sans-serif', 
    fontSize: '35px', 
    color: '#000'
  },
  appBar:{
    backgroundColor: '#9ff',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  },
  primary:{
    backgroundColor: "#000",
  }
}));

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'} >
            <button style={{marginRight: '10px', fontWeight:"500", fontSize:"18px"}}>
              Home
            </button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <button style={{marginRight: '10px', fontWeight:"500", fontSize:"18px"}}>
              All Campuses
            </button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <button style={{fontSize:"18px", fontWeight:"500"}}>
              All Students
            </button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default Header;
