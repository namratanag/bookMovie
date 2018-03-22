import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import {Jumbotron,Grid,Nav,ul,li} from 'react-bootstrap';
import './header.css'
// const styles = {
//                  headline: {
//                                fontSize: 24,
//                                paddingTop: 16,
//                                marginBottom: 12,
//                                fontWeight: 400,
//                             },
//                };

// function handleActive(tab) {
//        alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }

class Header extends Component{
   render(){  
       return(
      //  <div className="container header">
      //   <div className="row nav">
      //          <div className="col-4 nav-item"  ><Link to="/"><span className="tab" id="logo">bookMyshow</span> </Link></div>
      //           <div className="col-1 nav-item"><Link to="/"><span className="tab" id="movie">MOVIE</span> </Link></div>
                
      //           <div className="col-1 nav-item"><Link to="/register"><span className="tab" id="register">REGISTER</span></Link></div>
      //           <div className="col-1 nav-item"><Link to="/login"><span className="tab" id="login">{this.props.log?<div>Hi!! </div>:<div>LOGIN</div>}</span> </Link></div>
      //       </div>
      //       </div>
      <ul className="nav row">
  <li className="nav-item  col-sm-3">
    <Link to="/" className="nav-link active" ><span className="tab" id="movie">MOVIE</span> </Link>
  </li>
  <li className="nav-item col-sm-6">
    <Link to="/" className="nav-link" ><span className="tab" id="logo">bookMyshow</span></Link>
  </li>
  <li className="nav-item col-sm-1">
    <Link to="/register" className="nav-link" ><span className="tab" id="register">REGISTER</span></Link>
  </li>
  <li className="nav-item col-sm-1">
    <Link to="/login" className="nav-link" ><span className="tab" id="login">{this.props.log?<div>Hi!!</div>:<div>LOGIN</div>}</span> </Link>
  </li>
</ul>
           
      )} 
}

function mapStateToProps(state){
  console.log("this is the username" + state.other.payload);

  return {
    log:state.other.success,
    user:state.other.user,
    admin:state.other.admin,
    name:state.other.payload
  }
}


export default connect(mapStateToProps)(Header);