import {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';

const Nav = () => {
  const context = useContext(MyContext);
    const { auth} = context;

 
  return (
  
   <nav>
     
        <ul>
          
          <NavLink
            to='/'
            style={({ isActive }) => {
              return { color: isActive && 'white' };
            }}>
            <li>Home</li>
          </NavLink>


          
          <NavLink
            to='/about'
            style={({ isActive }) => {
              return { color: isActive && 'white' };
            }}>
            <li>About</li>
          </NavLink>
        </ul></nav>
     
    
     );
   }

export default Nav
