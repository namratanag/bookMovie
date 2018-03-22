import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './viewDetail.css';
//import isBlob from '../../node_modules/react-image-file/src/isBlob';
import {Link} from 'react-router-dom';

class ViewDetail extends Component{
      constructor(){
                super();
                this.state={
                               movies:[],
                               count:0,
                               arr:[]
                           }
                this.getData = this.getData.bind(this);
              
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount(){
                this.getData();
                
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
    getData(){
                axios.get('movieApi/getMovie').then(res=>{
                console.log(" component will mount ...." + res.data);  
                this.setState({movies:res.data});   
             })
               .catch(function(err){
                console.log("error occured ....." + err)
             });
  }
////////////////////////////////////////////////////////////////////////////////////////////////
 movieList(){
 
                return this.state.movies.map((b,l)=>{
        
                          console.log("hello there ....and freaking awesome");
                          return (
                              <li className="list-group-item">
                                {b.name}
                              </li>
                          );
                 });
 }
    render(){
        return (<div>
            <div>
                 <ul className="list-group list-group-flush">
                     {this.movieList()}
                 </ul>
            </div>     
        </div>)
    }
}

export default ViewDetail;