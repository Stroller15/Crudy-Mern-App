import { FormControl, FormGroup, InputLabel, Input, Typography, Button} from "@mui/material"
import "../App.css"
import { useState } from "react"
import addUser from "./service/api"

const defaultValue = {
  name:'',
  username:'',
  email:'',
  phone:'',
}

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

const addUserDetails = async() => {
  await addUser(user);
}

  return (
    <FormGroup className="form">
      <Typography variant="h4">Add User</Typography>
      <FormControl className="form-input">
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"/>
      </FormControl>
      <FormControl className="form-input">
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username"/>
      </FormControl>
      <FormControl className="form-input">
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"/>
      </FormControl>
      <FormControl className="form-input">
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"/>
      </FormControl>
      <FormControl className="form-input">
        <Button variant="contained" onClick={() => addUserDetails()}>ADD USER</Button>
      </FormControl>
    </FormGroup>
  )
}

export default AddUser
