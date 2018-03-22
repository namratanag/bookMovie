import axios from 'axios';
import { createBrowserHistory } from 'history';
 
export const login =(values) =>{
      
     axios.post('api/login',{username:values.username , password:values.password1})
        .then(function(res){
            localStorage.setItem('token','LOGGED_IN');
           
        }) 
        .catch(function(err){
                     console.log("error occured" + err)
               });
        
   const history = createBrowserHistory();
        history.push("/")
           console.log("why redux :( ");
  }
  