import axios from 'axios';
import {userConstants} from './constant.js'
import { createBrowserHistory } from 'history';
 

export const submit=(dispatch,values) =>{
     axios.post('api/register',{name:values.name,email:values.email,username:values.username , password1 :values.password1,password2:values.password2})
        .then(function(res){
            console.log("he he he");
            const {dispatch} =this.props;
                  console.log("he he he");     
            localStorage.setItem('token',"TOKEN");
             return dispatch =>{ 
         dispatch({ type:"REGISTER_USER",
        payload : values
     })}

        })
        .catch(function(err){
            console.log("error occured")
        });

    
}
                      
 
  