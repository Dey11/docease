import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


import { CurrentUserContext } from '../context/userContext';
import Dashboard from '../pages/Dashboard';
import DocumentManagement from '../pages/DocumentManagement';
import DocumentEditor from '../pages/DocumentEditor';

const Header = () => {
  

  return (
    <nav>
      <div className="">
        
        <ul>
            <li><Link to="/login">LoginPage</Link></li>
            <li><Link to="/">Home Page</Link></li>
            <li> <Link to="/signup">Sign Up page</Link></li>
            <li><Link to="/profile/aryan">Profile</Link></li>
            <li><Link to="/profile/aryan/setting">User Setting</Link></li>
            <li>
        <Link to="/profile/aryan/dashboard">User Dashboard</Link></li>
            <li> <Link to="/help">Help and Support</Link></li>
            <li> <Link to="/document">DocumentManagement Page</Link></li>
            <li> <Link to="/document-track"> document tracking Page</Link></li>
            <li>
        <Link to="/editor">DocumentEditor</Link></li>
            

        
        
       
        
        
       
       
       
        </ul>

      
        
     
      </div>
      <div>
        <h1>HEADER </h1>
      </div>
    </nav>
  );
};

export default Header;
