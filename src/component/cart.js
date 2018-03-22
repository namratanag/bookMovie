import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Cart extends Component{
  componentWillMount() {
                if ( !this.props.user_new) {
                          console.log("inside did update");
                          this. isAuth();
                }
  }
 isAuth(){
       return this.props.user_new;
    }
    render(){
        const isAuthenticate = this.isAuth();
        return (
            <div>{!isAuthenticate ? <Redirect to= "/login" />:(<div>This is cart section</div>)
            }</div>
        )
    }
}

function mapStateToProps(state){
    
    return {
        user_new: state.other.user,
       // user:state.other.admin

    }
}

export default connect(mapStateToProps)(Cart);