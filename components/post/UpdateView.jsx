import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from "@material-ui/core";
import AddBoxIcon from '@mui/icons-material/AddBox';

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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
    },
    textfield:{
        flex:1,
        margin:'0 20px',
        fontSize:25,
    },
    textArea:{
        width:"100%",
        border:"none",
        fontSize:18,
        marginTop:50,
        '&:focus-visible':{
            outline:'none',
        }
    }
}))

 const UpdateView =()=>{
     const classes= useStyles();
     return(
         <Box className={classes.container}>
             <img className={classes.img} src="https://tse3.mm.bing.net/th/id/OIP.gh8CTRKMI9R-JRMPYaocKQHaE8?pid=ImgDet&w=940&h=627&rs=1" alt="post"/>
         <FormControl  className={classes.form}>
               <AddBoxIcon fontSize="large" color="primary"/>
               <InputBase placeholder="Title" className={classes.textfield}/>
               <Button variant='contained' color='primary'>UPDATE</Button>
         </FormControl>
         <TextareaAutosize rowsMin='5' placeholder="Tell your Story" className={classes.textArea}/>
         </Box>
     );
 }
 export default UpdateView;