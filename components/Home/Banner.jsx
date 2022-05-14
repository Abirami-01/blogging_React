import { makeStyles, Box, Typography} from '@material-ui/core';
const useStyles = makeStyles({

    image:{
       background: `url(${"https://tse4.mm.bing.net/th/id/OIP.vphGJRW-1TIoCc2dAwVn4gHaFJ?pid=ImgDet&rs=1"}) center/55% repeat-x #000`,
       width : '100%',
       height : '60vh',
       display:'flex',
       alignItems:'center',
       flexDirection: 'column',
       justifyContent:'center',
       '& :first-child':{
           fontSize: 70,
           lineHeight:1,color:"#FFFFFF"
       },
       '& :last-child' : {
           color:"#FFFFFF",
           fontSize:20
       }
    }
});


const Banner =()=>{
    const classes = useStyles();
    return(
        <Box className ={classes.image}>
            <Typography>BLOG</Typography>
            {/* <Typography  style={{marginLeft:'auto'}}>Hi i am Abi</Typography> */}
        </Box>
    )
}

export default Banner;