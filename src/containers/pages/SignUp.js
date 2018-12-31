import React, {Component} from 'react';
import axios from 'axios';

import Input from '../../components/Input';
import Button from '../../components/Button';


export default class SignUp extends Component {
  state = {
    validated: true,
    errorMessage: '',
    uploading: false,
    passwordMismatchError: false,
    inputs: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNo: '',
      deliveryAddress: '',
      imageUrl: ''
    }
  }
  validateStringLength = (string) => {
    if (string.length >= 6 && string.length <= 150) {
      return true;
    }
    return false;
  };
  
  validateImageUrl = (url) => {
    const reg = /\.(jpe?g|png|)$/i;
    if (url === '') return true;
    if (reg.test(url)) return true;
    return false;
  };
  validateUserText = (string) => {
    if (typeof string !== 'string') return false;
    if (string.length < 6 || string.length > 20 ) {
      return false;
    }
    const validString = /^[0-9a-zA-Z_]+$/;
    return string.trim().match(validString);
  };
  
   validatePhoneNo = (phone) => {
    const validPhoneChar = /^[0][7-9][0-9][0-9]\d{7}$/g;
    return phone.trim().match(validPhoneChar);
  };
  
   validateString = (string) => {
    if (typeof string !== 'string') return false;
    if (string.length < 2 || string.length > 25) return false;
    const validString = /^[a-zA-Z-]+$/;
    return string.trim().match(validString);
  };
  
  checkValidEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = reg.test(String(email).toLowerCase());
    if (!isValid) return false;
    return true;
  };


  validateInputs = () => {
    const inputs = {...this.state.inputs};
    const validateData = Object.keys(inputs);
    for(let input = 0; input < validateData.length; input++){
        const va = inputs['username'];
        if(validateData[input] === 'username' && !this.validateUserText(inputs['username'])){
          this.setState({errorMessage: 'invalid Username Entered'})
          return false;
        }
        if(validateData[input] === 'firstname' && !this.validateString(inputs['firstname'])){
          this.setState({errorMessage: 'invalid firstname Entered'})
          return false;
        }
        if(validateData[input] === 'lastname' && !this.validateString(inputs['lastname'])){
          this.setState({errorMessage: 'invalid Lastname Entered'})
          return false;
        }
        if(validateData[input] === 'email' && !this.checkValidEmail(inputs['email'])){
          this.setState({errorMessage: 'invalid Email address Entered'})
          return false;
        }
        if(validateData[input] === 'password' && !this.validateStringLength(inputs['password'])){
          this.setState({errorMessage: 'invalid password length'})
          return false;
        }
        if(this.state.passwordMismatchError){
          this.setState({errorMessage: 'passwords do not match'})
          return false;
        }
        if(validateData[input] === 'phoneNo' && !this.validatePhoneNo(inputs['phoneNo'])){
          this.setState({errorMessage: 'invalid phone number entered'})
          return false;
        }
        if(validateData[input] === 'deliveryAddress' && !this.validateStringLength(inputs['deliveryAddress'])){
          this.setState({errorMessage: 'invalid delivery Aadress Entered'})
          return false;
        }
        if(validateData[input] === 'imageUrl' && !this.validateImageUrl(inputs['imageUrl'])){
          this.setState({errorMessage: 'Invalid image type'})
          return false;
        }
    }
    return true;
  }

  registerUser = (event) => {
    event.preventDefault();
    const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/signup';
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }
    const userData = {...this.state.inputs};
    delete userData.confirmPassword;
    if(this.validateInputs() !== true){
      return this.setState({validated: false})
    }
    axios(
      {
      url,
      method: 'POST',
      data: 
        userData,
      headers: {
        "Content-Type": "application/json",
      },

    })
    .then((response => {
      console.log(response);
      console.log(response.data);

    }))
    .catch(error => {
      console.log(error.response.data);
    })
  }

  checkPasswords = (evt) => {
    if(event.target.name === 'password' || event.target.name === 'confirmPassword'){
      this.setState({passwordMismatchError: true});
    }
    if(this.state.inputs.password === this.state.inputs.confirmPassword){
      this.setState({passwordMismatchError: false});
    }
  }

  handleInputChange = (event) => {
    const elementInputs = {...this.state.inputs}
    elementInputs[event.target.name] = event.target.value;
    this.setState({inputs: elementInputs});
  }

  uploadImage = (event) => {
    console.log(event.target.files[0])
    const url = 'https://api.cloudinary.com/v1_1/fast-food-fast/upload';
    const preset = 'usersprofileimages';
    const imageUrl = event.target.files[0];
    const uploadImage = new FormData();
    uploadImage.append('file', imageUrl);
    uploadImage.append('upload_preset', preset);
    axios({
      url,
      method: 'POST',
      data: uploadImage,
    })
    .then((data)=>{
      const userData = {...this.state.inputs};
      userData.imageUrl = data.data.secure_url;
      this.setState({
        inputs: userData,
        uploading: true
      });
    })
    .catch(error => {
      this.setState({
        errorMessage: 'Error uploading Image',
        uploading: false,
      });
    })
  }
  
  render() {
    return (
      <main className="content">
        <div className="content_signup">
          <div className="signup-title">
            <h1>Welcome to the <br/>Best Fast Food online Restaurant</h1>
          </div>
          <div className="signup-container">
              <div className="toggle-signup">
                <div className="signup-register">Register</div>
              </div>
              <form className="signup-form" name="signup">
                <label className="signup-message" style={{display: !this.state.validated ? 'block' : 'none'}}>{this.state.errorMessage }</label>
              <div className="signup-form-container">
                  <label>Upload profile Image</label>
                  <Input  inputtype={"text"} inputtype={"text"}  className={"imageUrl"} type={"file"} name={"imageUrl"} onChange={this.uploadImage} accept={"image/*"}/><br/>
                  <Input  inputtype={"text"} type={"text"} placeholder={"Enter username"} name={"username"} className={"email signup-form"} onChange={this.handleInputChange} required /><br/>
                <div className="name-group">
                  <Input  inputtype={"text"} type="text" placeholder="Enter Firstname" name="firstname" className={"firstname signup-form"} onChange={this.handleInputChange} required />
                  <Input inputtype={"text"} type="text" placeholder="Enter Lastname" name="lastname" className={"lastname signup-form"} onChange={this.handleInputChange} required /></div>
                <Input  inputtype={"text"} type="email" placeholder="Enter Your Email" name="email" className={"email signup-form"} onChange={this.handleInputChange} required />
                <div className="pwd-group">
                <Input  inputtype={"text"} type={"password"} placeholder={"Enter Password"} className="pwd" name={"password" }id={"pwd"} onBlur={this.checkPasswords} onChange={this.handleInputChange} required={true} />
                  <Input  inputtype={"text"} type={"password"} placeholder={"Confirm Password"} name={"confirmPassword"} id={"confirmpwd"} onBlur={this.checkPasswords} onChange={this.handleInputChange} className={"pwd"} required={true}/>
                  {/* <Input type="password" placeholder="Confirm Password" name="confirmpassword" id="confirmpwd" className="pwd" required /> */}
                </div>
                <label className="checkPasswords" style={{display: this.state.passwordMismatchError ? 'block' : 'none'}}>passwords do not match</label>
                <Input  inputtype={"text"} type={"text"} placeholder={"Enter Phone Number"} name={"phoneNo"} className={"phone-no signup-form"} onChange={this.handleInputChange} required />
                <Input  inputtype={"text"} type={"text"} placeholder={"Enter Delivery Address"} name={"deliveryAddress"} className={"delivery-address"} onChange={this.handleInputChange} required />
              
                <button type="submit" className="signup-submit" onClick={this.registerUser} >Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
