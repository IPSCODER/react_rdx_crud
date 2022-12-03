import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../redux/action"
const AddUser = () => {
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

  const { name, email, contact, address } = state;
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
      dispatch(addUser(state))
    }
  };

  return (
    <form action="" style={flex} onSubmit={handleSubmit}>
      <h2>Add user</h2>
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
          value={name}
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
          value={email}
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
          value={contact}
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
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
      </Box>
      <Button type="submit">Submit</Button>
      <br/>
      <Button onClick={()=>{navigate("/")}}>Back</Button>
    </form>
  );
};

export default AddUser;
