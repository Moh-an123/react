import React from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/joy/Button';

function Signup() {
  return (
    <div className="jj">
      <div className="box-main">
      <div className="box">
        <div className="box2">
          <h3>Signup Page</h3>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            sx={{color:'black'}}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            sx={{color:'black'}}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            required
            type="password"
            autoComplete="current-password"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{color:'black'}}
          />
          <TextField
            id="outlined-number"
            label="Number"
            required
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          
            sx={{color:'black'}}
          /> <Button sx={{width:'150px',height:'30px'}}>Submit</Button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;
