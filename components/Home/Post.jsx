import { Box, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    container :{
      height:350,
      margin:13,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      borderRadius:10,
      border :'2px solid #AAAAAA',
     '& > *' :{
         padding: "0 5px 5px 5px"
     }

    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'


    },
    text:{
        color:'#767676',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    detail:{
        fontSize: 14,
        wordBreak:"break-word"
    }

})
const Post = ()=>{
    const url="https://tse1.mm.bing.net/th/id/OIP.UOnGb3KOUdiOm7FGNeRHnQHaHa?pid=ImgDet&rs=1";
    const classes=useStyles();
    return (
        <Box className={classes.container}>
           <img src={url} alt="post1" className={classes.image}/>
           <Typography className={classes.text}>Music</Typography>
           <Typography className={classes.heading}>Guitar</Typography>
           <Typography className={classes.text}>Life is boring without music</Typography>
           <Typography className={classes.detail}>Music gives refreshment and happy feelings ot life</Typography>
        </Box>
    )
}
export default Post;