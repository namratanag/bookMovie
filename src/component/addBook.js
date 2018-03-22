import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import history from '../hist';
//const  { DOM: { input, select, textarea } } = React
class AddForm extends Component{
//This  function is called when form is submitted------------------------------------------------------ 
   submit(values){
     console.log("title is... it is newwwww" + values.employed)

    //  axios.post('data/addBook',{title:values.title,author:values.author,genre:values.genre, price:values.price})
    //       .then(function(res){
    //         console.log("add book");    
    //         history.push('/');
    //       })
    //       .catch(function(err){
    //         console.log("error occured")
    //       });
 }
 //This is the main component -------------------------------------------------------------------------------
   render(){
     const {handleSubmit} =this.props;
       return (
         <form onSubmit={handleSubmit(this.submit.bind(this))}>
           <div>
             <label htmlFor="title">Title</label>
             <Field name="title" component="input" type="text" />
           </div>
           <div>
             <label htmlFor="author">Author</label>
             <Field name="author" component="input" type="text" />
           </div>
           <div>
             <label htmlFor="genre">Genrer</label>
             <Field name="genre" component="input" type="text" />
           </div>
           <div>
             <label htmlFor="price">Price</label>
             <Field name="price" component="input" type="number" />
           </div>
           
           <div>
        <label htmlFor="employed">Store</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" value="1"/>
        </div>
        <label htmlFor="employed">Store</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" value="2"/>
        </div>
        <label htmlFor="employed">Store</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" value="3"/>
        </div>
        <label htmlFor="employed">Store</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" value="4"/>
        </div>
        
      </div>
      <button type="submit">Submit</button>
        </form>
  )}

}
  AddForm = reduxForm({
    form:'add'
  })(AddForm);

export default AddForm;
