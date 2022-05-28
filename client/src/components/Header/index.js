import React from 'react';
// import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

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
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="logo">
            Logo
          </span>
          PlaylistAnt
        </Link>
      </h1>

      <Link className="signup" to='/signup'> Sign up</Link>
      <Link to='/signin'> Sign in</Link>
      {/* <nav>{showBtn()}</nav> */}
    </header>
  );

}
  export default Header;
