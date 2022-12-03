import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate ,useParams } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import {addUser, getSingleUser, updateUser} from "../redux/action"
const EditUser = () => {
  const navigate =useNavigate();

  const dispatch =useDispatch()

  const flex = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  //
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });

  const [error,setError] = useState()

  let {id} = useParams()
  const {user} = useSelector((state)=>state.data)

  const { name, email, contact, address } = state;
  
  
  useEffect(()=>{
    dispatch(getSingleUser(id))
  },[])
  

  useEffect(()=>{
    if(user){
        setState({...user})
    }
  },[user])

  //
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !address || !email || !contact){
      setError("please fill the all input Field")
    }else{
      navigate("/")
      dispatch(updateUser(state,id))
    }
  };

  return (
    <form action="" style={flex} onSubmit={handleSubmit}>
      <h2>Edit user</h2>
      {error && <h3 style={{color:"red"}} >{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name || ""}
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email || "" }
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact || "" }
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          name="address"
          value={address || ""}
          type="text"
          onChange={handleInputChange}
        />
        <br />
      </Box>
      <Button type="submit">Update</Button>
      <br/>
      <Button onClick={()=>{navigate("/")}}>Back</Button>
    </form>
  );
};

export default EditUser;
