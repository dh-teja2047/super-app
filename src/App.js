import './App.css';

function App() {
  return (
    <div className="registration">
      <div className='homePage'>
      <img src='bcg-image.png' alt='background'/>
      <div className='text'>
        <p>
        Discover new things on Superapp
        </p>
      </div>
      <div className='rightPanel'>
        <div className='form'>
        <h2>Super app</h2>
        <p>Create your new account </p>
        <form className='formElements'>
          <input id='name' className='name' placeholder='Name'  /> <br />
          <input id='userName' className='userName' placeholder='UserName'/> <br />
          <input id='email' className='email' placeholder='email' /> <br />
          <input id='mobile' className='mobile' placeholder='Mobile' /> <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className='terms'>Share my registration data with Superapp</label>
        </form>
        <button id='signup' className='signup'>SIGN UP</button> <br /><br />
        <div className='termsAndPolicy'>
        <p> By clicking on Sign up. you agree to Superapp <span style={{color: 'rgba(114, 219, 115, 1)'}}> Terms and Conditions of Use</span></p> <br/><br/><br/>
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color: 'rgba(114, 219, 115, 1)'}}>Privacy Policy</span></p>
        </div>
       
        
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default App;
