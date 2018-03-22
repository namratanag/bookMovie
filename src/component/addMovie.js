import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import history from '../hist';
import NewTheater from './newTheater';
//const  { DOM: { input, select, textarea } } = React
class AddMovie extends Component{
    constructor(){
                super();
                this.state={
                               documents:[]
                         } 
                         this.addTheater = this.addTheater.bind(this);          
  }



  //////////////////////////////////////////////////////////////////////////////////////////componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
     componentDidUpdate(prevProps, prevState) {
       console.log("insidde component update");
  // only update chart if the data has changed
  if (prevState.add !== this.state.add) {
        
        this.render();
    }}


//This  function is called when form is submitted------------------------------------------------------ 
   submit(event){
     var len =this.state.documents.length;
     var movieTheater=[];
     var obj={
       theater:String,
       price:Number,
       time:Number,
       screen:Number

     }
     for(var i=0;i<len;i++){
    obj.theater=event.theater[`${i}`];
    obj.screen=event.screen[`${i}`];
    obj.price=event.price[`${i}`];
     obj.time=event.time[`${i}`];
      movieTheater[i]=obj;
      console.log("name of theater" + movieTheater[i].theater+ "screen number" +   movieTheater[i].screen +"price of the movie" + movieTheater[i].price + "timing is.." + movieTheater[i].time);
     }
    //   for(var i=0;i<len;i++){
    //     console.log("name of theater" + movieTheater[i].theater+ "screen number" +   movieTheater[i].screen +"price of the movie" + movieTheater[i].price + "timing is.." + movieTheater[i].time);
    // }
     
    axios.post('movieApi/addMovie',{name:event.name,img:event.imgFile,movieTheater:movieTheater})
          .then(function(res){
            console.log("add book" + res);    
           history.push('/');
          })
          .catch(function(err){
            console.log("error occured")
          });
var i=0;

     window.alert(`You submitted:\n\n${JSON.stringify(event, null, 2)}`);
       console.log("inside add theater" + event.theater[`${i}`]);
 }

 addTheater(i){
    const documents = this.state.documents.concat(NewTheater);
   console.log("inside add theater" + documents.length);
    
      this.setState({ documents });
 }

//  newTheater(){
//    return (
//      <div><NewTheater /></div>
//    )
//  }
//This is the main component -------------------------------------------------------------------------------
   render(){
      const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });
     const {handleSubmit} =this.props;
       return (
         <div className="addMovie">
         <div className=" container">
         <form onSubmit={handleSubmit(this.submit.bind(this))}>
             <div className="form-group">
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text"  className="form-control" />
      </div>
       <div className="form-group">
          <label htmlFor="imgFile">Image file name</label>
        <Field name="imgFile" id="imgFile" component="input" type="text" className="form-control" />
      </div>
           
         <div className="inputs">
        { documents }
      </div>
      <div className="form-group">
      <a className="btn btn-success " onClick={ this.addTheater }>ADD DETAIL</a>
      </div>
        <div className="form-group">
      <button type="submit" className="btn btn-secondary">Submit</button>
      </div>
        </form>
        </div></div>
  )}

}
  AddMovie = reduxForm({
    form:'addnew'
  })(AddMovie);

export default AddMovie;
