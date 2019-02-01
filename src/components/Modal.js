import React from 'react'

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.getPassword = this.getPassword.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }
  state = {
    username: '',
    password: '',
  }

  getUsername(e){
    this.setState({
      username: e.target.value,
    });
  }
  getPassword(e){
    this.setState({
      password: e.target.value,
    });

  }
  
  render(){
    return(
      <div id="modal-id" className="modal" style={{display:this.props.loginPanel ? 'block' : 'none'}}>
                  <span className="close" title="Close Modal">&times;</span>
                  <form className="modal-content animate">
                    <div className="imgcontainer">
                      <h1>Login</h1>
                    </div>
                    <div className="modal-container" >
                        <div className="login-spinner"></div>           
                      <label className="login-message" style={{display: this.props.errorMessage ? 'block' : 'none'}}> {this.props.errorMessage}</label>
                      <label htmlFor="uname"><b>Username</b></label>
                      <input id="uname" type="text" onChange={this.getUsername} placeholder="Enter Username" name="uname" required/>
                
                      <label  htmlFor="psw"><b>Password</b></label>
                      <input id="psw" type="password" onChange={this.getPassword} placeholder="Enter Password" name="psw" required/>
                
                      <button className="submit" type="submit" onClick={(e)=>{this.props.signin(e, this.state.username, this.state.password)}}>Login</button>
                      {/* <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                      </label> */}
                    </div>
                    <div className="modal-container" style={{backgroundColor: '#f1f1f'}}>
                      <button type="button" onClick={this.props.closeModal} className="cancelbtn">Cancel</button>
                    </div>
                  </form>
                </div>
    );
  }

}

export default Modal;
