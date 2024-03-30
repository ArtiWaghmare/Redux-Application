

import React from 'react';
import { useDispatch } from 'react-redux';
import {logout} from '../../Redux/Action'
import { BrowserRouter, Routes, Route,Link, useNavigate} from 'react-router-dom';
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {

    dispatch(logout());
   navigate('/');
   
  };

  return (
    <div>
      <div className='header'>
        <Link to={'/home'}><button type="button" className="btn btn-warning">Home</button></Link>
        <Link to={'/user'}><button type="button" className="btn btn-warning">User Details</button></Link>
        <button type="button" className="btn btn-warning logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
