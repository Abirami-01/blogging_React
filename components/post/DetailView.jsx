import { Box, makeStyles, Typography } from "@material-ui/core";
import {Edit, Delete} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
 img: {
     margintop:100,
     display:'flex',
     alignItems:'center',
     width:'100%',
     height:'50vh',
     objectFit:'cover',
 },
 container:{ 
   padding:'0 100px',
   [theme.breakpoints.down('md')]:{
   padding:0
 }
 },
 icons:{
     float:'right'
 },
 icon:{
     margin:5,
     border : '2px solid #787878',
     padding:5,
     borderRadius:10
 },
 heading:{
     fontSize:38,
     fontWeight: 600,
     textAlign:'center',
     padding:'50px 0 10px 0'
 },
 subheading:{
        color:'#878787',
        display:'flex',
        margin:'10px 0',
        [theme.breakpoints.down('sm')]:{
            display:"block"
        }
 },
 desc:{
     
     marginTop:50,
 }

}))
const DetailView =()=>{
    const classes = useStyles();
    return(
        
       <Box className={classes.container}>
           <img className={classes.img} src="https://tse4.mm.bing.net/th/id/OIP.LDV2XK55pIVjEEgJJzuq1wHaEo?pid=ImgDet&rs=1" alt="img1"/>
           <Box className={classes.icons}>
               <Link to='/update'><Edit className={classes.icon} color="primary"/></Link>
               <Delete className={classes.icon} color="error" />
           </Box>
           <Typography className={classes.heading}>TITLE OF THE BLOG</Typography>
       
       <Box className={classes.subheading}>
           <Typography> Author :<span style={{fontWeight:600}}> Abi</span> </Typography>
           <Typography style={{marginLeft:'auto'}}> March 13 2022 </Typography>
        </Box>
        <Box className={classes.desc}>
            <Typography>Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology. Hi this is my first react project and im rying to build a blogging website using MERN technology</Typography>
        </Box>
        </Box>
    )
}
export default DetailView;