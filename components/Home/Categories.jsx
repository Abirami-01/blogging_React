import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { categories } from "../../constants/data";
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
   create :{
       margin:20,
       background:'#6495ED',
       color:'#fff',
       width:'86%'
   },
   table :{
       border :"1px solid #888888"
   }
}
)

const Categories = ()=>{
    const classes = useStyles();
    return (
        <>
        <Link to="/create"  style={{textDecoration:'none'}} >
        <Button variant="contained" className={classes.create}>Create Blog</Button> 
        </Link>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                categories.map(category=>
                    <TableRow>
                        <TableCell>{category}</TableCell>
                    </TableRow>
                    )
            }
            </TableBody>
        </Table>
        </>
    )
}
export default Categories;