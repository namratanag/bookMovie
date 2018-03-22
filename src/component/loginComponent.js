import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import history from '../hist';
import {Redirect} from 'react-router-dom';
import {Field , reduxForm} from 'redux-form';

class LoginDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      username:""
    }
  }
   login(values){
       const {dispatch} = this.props;
        console.log("title is... " + this.state.username)
      if(values.login=="Admin")  { 
         console.log("inside the admin... " + values.login)
        axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
        .then(function(res){
         // this.setState({username:res.data}); 
          console.log("error occured" + res.data + "type of" + typeof(res.data));
          if(res.data){   localStorage.setItem('token','ADMIN');
                dispatch({ type:"LOGIN_ADMIN",
               payload : res.data
       
     })
     
     history.push('/');}
         
          
        }) 
        .catch(function(err){
                     console.log("error occured" + err)
               });}

         else{      
             console.log("inside the user... " + values.login)
         axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
        .then(function(res){
             console.log("error occured" + res.data)
             if(res.data){
               localStorage.setItem('token','USER');
                dispatch({ type:"LOGIN_USER",
                payload : res.data
              })
     
     history.push('/');
             }
            
          
        }) 
        .catch(function(err){
                     console.log("error occured" + err)
         });}
               
    
        
 
  }
    render(){
    const {handleSubmit} =this.props;
    return (< form onSubmit={handleSubmit(this.login.bind(this))}>
       
        <div className="form-group">
        <label htmlFor="username">UserName</label>
        <Field name="username" component="input" type="text" className="form-control" />
      </div>
       <div className="form-group">
        <label htmlFor="password1">Password</label>
        <Field name="password1" component="input" type="password" className="form-control" />
      </div>  
      <div>
        <label>LOGIN AS</label>
        <div  className="form-check">
          <label><Field name="login" component="input" type="radio" value="Admin"  className="form-check-input" /> ADMIN</label>
               </div>  
               
        <div  className="form-check">
          <label><Field name="login" component="input" type="radio" value="User"  className="form-check-input" /> USER </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
        
  )}

}
LoginDetail = reduxForm({
    form:'loginDetail'
})(LoginDetail);

function mapStateToProps(state){
  return {
    log:state.other.success,
    user:state.other.user,
    admin:state.other.admin
  }
}





export default connect(mapStateToProps)(LoginDetail ) ;