import React from 'react';

function Banner  ()  {
  return (
    <div className='banner'>
        <img src='banner2.jpg' alt='banner'/>
        {/* <img src='/Users/dharmateja/TEJA/Web-Dev/super-app/src/assets/banner.png' alt='banner'/> */}
        <div className='text'>
          <p>
            Discover new things on Superapp
          </p>
        </div>
    </div>
  )
}

export default Banner;