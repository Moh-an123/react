import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './head.css'
import Login from './login.js';
import Home1 from './Home.js';
import Projects from './projects.js';
import Contacts from './Contacts.js';
import Signup from './Signup.js';
const a=0;
function Head(){
    return (
        <>
        <div className="header">
              <h1>Dino</h1>
              <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
              <Routes path='/' element={<Home1 />}>
                <Route index path='/' element={<Home1 />} />
                <Route  path='/login' element={< Login/>} />
                <Route  path='/projects' element={<Projects/>} />
                <Route  path='/contact' element={< Contacts/>} />
                <Route path='/signup' element={<Signup />}/>
              </Routes>
        </div>
        </>
    );
}
export default Head;