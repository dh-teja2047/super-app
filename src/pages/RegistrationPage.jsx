import React from 'react';
import SignUp from '../components/Sign_up';
import Banner from '../components/Banner.jsx';


function RegistrationPage  ()  {
  return (
    <div style={{display:"flex"}}>
        <Banner/>
        <SignUp/>
    </div>
  )
}

export default RegistrationPage;