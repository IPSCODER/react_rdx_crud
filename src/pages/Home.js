import  React, {useEffect} from 'react';
import { useLocation, Link, useNavigate} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/action';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


const Home = () => {

    let location = useNavigate()
    let dispatch = useDispatch()
    const {users} = useSelector(state => state.data)
    useEffect(()=>{
        dispatch(loadUsers())
    },[])


    const handleDelete = (id) =>{
        if(window.confirm("Are you sure wanted to delete the user ?")){
          dispatch(deleteUser(id))
        }
    }

  return (
   <>
   <div >
   </div>
     <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Contact</StyledTableCell>
          <StyledTableCell align="center">Address</StyledTableCell>
          <StyledTableCell align="center">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users && users.map((user) => (
          <StyledTableRow key={user.id}>
            <StyledTableCell component="th" scope="row">
              {user.name}
            </StyledTableCell>
            <StyledTableCell align="center">{user.email}</StyledTableCell>
            <StyledTableCell align="center">{user.contact}</StyledTableCell>
            <StyledTableCell align="center">{user.address}</StyledTableCell>
            <StyledTableCell align="center">
            <ButtonGroup variant="text" aria-label="text button group">
  <Button onClick={()=>handleDelete(user.id)} >Delete</Button>
  <Button onClick={()=>location(`/editUser/${user.id}`)} >Edit</Button>
  <Button onClick={()=>location("/addUser")} >Add User</Button>


</ButtonGroup>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   </>
  )
}

export default Home
