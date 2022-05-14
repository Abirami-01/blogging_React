import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
    component:{
        backgroundColor:"#FFFFFF",
        color:"#111111",
        position:'fixed',
        }, 
    container :{
        justifyContent :"center",
        '& > *':{
            padding:20
        }
    },
    Link: {
        textDecoration:'none',
        color:'inherit'
    }

})



const Header = ()=>{
    const classes = useStyles();
    return(
       <AppBar className={classes.component}>
           <Toolbar className={classes.container}>
              <Link to='/' className={classes.Link}> <Typography>HOME</Typography></Link>
               <Typography>ABOUT</Typography>
               <Typography>CONTACT</Typography>
               <Typography>LOGIN</Typography>
           </Toolbar>
       </AppBar>
    );

}

export default Header;