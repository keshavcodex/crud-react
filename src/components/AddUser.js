import { useState } from "react";

import {
  FormControl,
  FormGroup,
  TextField,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
} 

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0;
  & > div {
    margin-top: 10px;
  }
`;

function AddUser() {

  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    // we are using "...user" so that new parameter gets append into it
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user)
  };

  const addUserDetails = () =>{
    
  }

  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default AddUser;
