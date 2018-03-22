import React, { Component } from 'react';
import './adminOption.css';
import {Link} from 'react-router-dom';

class AdminOption extends Component{
    // logout(){     
    //            const {dispatch} = this.props;
    //            console.log("inside logout");
    //            localStorage.removeItem('token');
    //             dispatch({ type:"LOG_OUT",
    //           })
    //      }
      render(){
       
          return (
            <div>
              <div className="container">
                 <div className="jumbotron">
                     <div>ADMIN LOGGED IN</div>
                     <div>Yo can make the following changes</div>
                  </div> 
             
       
<Link to="/addBook"><span className="dot" id="card1"><div className="cir">ADD MOVIE</div></span></Link>
<Link to="/detail"><span className="dot" id="card2"><div className="cir">VIEW MOVIEs</div></span></Link>
<Link to="/addBook"><span className="dot" id="card3"><div className="cir">ADD ADMIN</div></span></Link>

                
               
           
            </div> 
            </div>
          )
      }

}

// function mapStateToProps(state){
//                  console.log("this is viewbook" + state.other.admin + "success" + state.other.success+ "user" + state.other.user );
//                  return {
//                        user:state.other.admin,
//                        log:state.other.success,
                       
//                   }
// }

export default AdminOption;