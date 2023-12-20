import "./login.css";
import Projects from "./projects.js";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Signup from "./Signup.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function Login() {
  return (
    <>
      <div className="h">
        <div className="login">
          <div className="log">
            <h1>Login Page</h1>
            <form>
              <TextField
                id="outlined-multiline-flexible"
                label="Username"
                multiline1
                maxRows={4}
                
              />
              <br />
              <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
sx={{color:'brown'}}
              />
              <br /> <br />
              <Stack>
                <Button variant="contained">Login</Button>
              </Stack>
            </form>
            <p>
              if you don't have an account
              <Link to="/signup"> Signup</Link>
              <Routes path="/" element={<Login />}>
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </p>
            {/* <Link to='/new'>Signup</Link><Outlet />  */}
            {/* <a href='/new'>ggg</a></p>
<Routes>
    <Route path='/new' element={<New />} />
</Routes> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
