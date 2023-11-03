import { useState, useEffect } from "react";
import './App.css';

function App() {

const initialValues = {name :"", userName :"", email :"",mobile :""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormValues({ ...formValues, [name]: value });
  console.log(formValues);
};

const handleSubmit = (e) =>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};


useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErrors]);

const validate = (values) =>{
  const errors ={};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Field is required!";
  }
  if (!values.userName) {
    errors.userName = "Field is required!";
  }
  if (!values.email) {
    errors.email = "Field is required!";
  }
  if (!values.mobile) {
    errors.mobile = "Field is required!";
  }

  return errors;

};

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
        <p className="createAccountPara">Create your new account </p>
        <form className='formElements' onSubmit={handleSubmit}>
          <div id='name' className='name' >
          <input 
            type='text'
            name= 'name'
            placeholder='Name'  
            value={formValues.name}
            onChange={handleChange}
          /> 
          </div>
          <p className='errors'>{formErrors.name}</p>

          <div  id='userName' className='userName' >
          <input 
           
            type='text'
            name='userName'
            placeholder='UserName'
            value={formValues.userName}
            onChange={handleChange}
          />
          </div> 
          <p className='errors'>{formErrors.userName}</p>

          <div id='email' className='email'> 
          <input 
            type='text'
            name='email'
            placeholder='email' 
            value={formValues.email}
            onChange={handleChange}
          /> 
          </div>
          <p className='errors'>{formErrors.email}</p>
          
          <div  id='mobile' className='mobile' >
          <input 
            type='text'
            name='mobile'
            placeholder='Mobile' 
            value={formValues.mobile}
            onChange={handleChange}
            /> 
          </div>
          <p className='errors'>{formErrors.mobile}</p>
          
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className='terms'>Share my registration data with Superapp</label>
          <button id='signup' className='signup'>SIGN UP</button> <br /><br />
        </form>
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
