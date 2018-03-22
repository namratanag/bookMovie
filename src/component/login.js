import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import history from '../hist';
import {Redirect} from 'react-router-dom';
import {Field , reduxForm} from 'redux-form';
import Cart from './cart';
import AdminOption from './adminOption.js'
import LoginDetail from './loginComponent.js';
//const  { DOM: { input, select, textarea } } = React
//import {login} from '../action/loginAction';
class LoginForm extends Component{
  // login(values){
  //      const {dispatch} = this.props;
  //       console.log("title is... " + values.login)
  //     if(values.login=="Admin")  { 
  //        console.log("inside the admin... " + values.login)
  //       axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
  //       .then(function(res){
  //         console.log("error occured" + res.data + "type of" + typeof(res.data));
  //         if(res.data){   localStorage.setItem('token','ADMIN');
  //               dispatch({ type:"LOGIN_ADMIN",
  //       payload : values.login
       
  //    })
     
  //    history.push('/');}
         
          
  //       }) 
  //       .catch(function(err){
  //                    console.log("error occured" + err)
  //              });}

  //        else{      
  //            console.log("inside the user... " + values.login)
  //        axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
  //       .then(function(res){
  //            console.log("error occured" + res.data)
  //            if(res.data){
  //              localStorage.setItem('token','USER');
  //               dispatch({ type:"LOGIN_USER",
  //               payload : values.login
  //             })
     
  //    history.push('/');
  //            }
            
          
  //       }) 
  //       .catch(function(err){
  //                    console.log("error occured" + err)
  //        });}
               
    
        
 
  // }
  componentDidMount(){
  document.styleSheets[2].disabled = true;
}
  
  render(){
    const {handleSubmit} =this.props;
    return (<div className ="container">{!this.props.log?<LoginDetail />:<div>{this.props.admin?<AdminOption />:<Cart />}</div>}</div>
        
  )}

}
// LoginForm = reduxForm({
//     form:'login'
// })(LoginForm);

function mapStateToProps(state){
  return {
    log:state.other.success,
    user:state.other.user,
    admin:state.other.admin
  }
}




export default connect(mapStateToProps)(LoginForm) ;