import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import './register.css';
//import * as bootstap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class RegisterForm extends Component{
 submit(values){
   const {dispatch} = this.props;
         axios.post('api/register',{name:values.firstName,email:values.email,username:values.lastName , password1 :values.password1,password2:values.password2,role:values.login})
        .then(function(res){
            console.log("he he he");
             dispatch({ type:"REGISTER_USER",
        payload : values
     })
    //        console.log("he he he");     
    //          return dispatch =>{ 
    //      dispatch({ type:"REGISTER_USER",
    //     payload : values
    //  })}

        })
        .catch(function(err){
            console.log("error occured")
        });
 }
  render(){
    const {handleSubmit} =this.props;
    return (
      
      <div className ="container">
      <h2 className="top" > Create Account </h2>
      <div className ="registerPage" >
     
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
        
        <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text"  className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text"  className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field  className="form-control" name="email" component="input" type="email" />
      </div>
       <div className="form-group">
        <label htmlFor="password1">Password</label>
        <Field  className="form-control" name="password1" component="input" type="password" />
      </div>
       <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <Field   className="form-control" name="password2" component="input" type="password" />
      </div>
       <label>Register As</label>
        <div  className="form-check">
          <label><Field name="login" component="input" type="radio" value="Admin"  className="form-check-input" /> ADMIN</label>
                 </div>
          <div  className="form-check">
          <label><Field name="login" component="input" type="radio" value="User"  className="form-check-input" /> USER </label>
        </div>
      <button type="submit">Submit</button>
        </form>
        </div>
         </div>
  )}

}
RegisterForm = reduxForm({
    form:'register'
})(RegisterForm);




export default RegisterForm;
