import React from 'react';
// import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './header.css';

const logo = require('./logo_white.png');

function Header() {
  // function showBtn() {
  //   if (Auth.loggedIn()) {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/savedplaylists">Saved Playlists</Link>
  //         </li>
  //         <li className="mx-1">
  //           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           <a href="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/signup">Sign Up</Link>
  //         </li>
  //         <li className="mx-1">
  //           <Link to="/signin">Sign In</Link>
  //         </li>
  //       </ul>
  //     );
  //   }
  // }

  return (
    <header classname="flex">
      <Link className="top-btn" to='/signup'> Sign up / Sign In </Link>
      
      <Link to="/">
      <img src={logo} alt="Logo" className='logo'/>
      </Link>
      

      {/* <nav>{showBtn()}</nav> */}
    </header>
  );

}
  export default Header;
