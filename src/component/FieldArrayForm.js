import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
//import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Hobby</button>
    </li>
    {fields.map((hobby, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}/>
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
<div className="form-group">  
  <ul >
    <li >
      <button type="button" onClick={() => fields.push({})}>Add Member</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          className="btn btn-secondary"
          onClick={() => fields.remove(index)}/>
        <h4>Theater #{index + 1} {console.log("this is field" + member)}</h4>
        <div className="form-group" >
        <Field
          name={`${member}.name`}
          type="text"
          component={renderField}
          label="Theater name "
           className="form-control" />
          </div>
           <div className="form-group" >
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
           className="form-control" />
          </div>
        
      </li>
    )}
  </ul>
  </div>
)

const FieldArraysForm = (props) => {

function addMovie(values){
    //    const {dispatch} = this.props;
    //     console.log("title is... " + this.state.username)
    //   if(values.login=="Admin")  { 
    //      console.log("inside the admin... " + values.login)
    //     axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
    //     .then(function(res){
    //      // this.setState({username:res.data}); 
    //       console.log("error occured" + res.data + "type of" + typeof(res.data));
    //       if(res.data){   localStorage.setItem('token','ADMIN');
    //             dispatch({ type:"LOGIN_ADMIN",
    //            payload : res.data
       
    //  })
     
    //  history.push('/');}
         
          
    //     }) 
    //     .catch(function(err){
    //                  console.log("error occured" + err)
    //            });}

    //      else{      
    //          console.log("inside the user... " + values.login)
    //      axios.post('api/login',{username:values.username , password:values.password1,role:values.login})
    //     .then(function(res){
    //          console.log("error occured" + res.data)
    //          if(res.data){
    //            localStorage.setItem('token','USER');
    //             dispatch({ type:"LOGIN_USER",
    //             payload : res.data
    //           })
     
    //  history.push('/');
    //          }
            
          
    //     }) 
    //     .catch(function(err){
    //                  console.log("error occured" + err)
    //      });}
        var i=0;
        var c=JSON.stringify(values, null, 2);
        console.log("this is what you will get from ............" + values.members[`${i}`].name);
     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        
 
}

  const { handleSubmit, pristine, reset, submitting } = props
  return ( <div className=" container">
    <form onSubmit={handleSubmit(addMovie.bind(this))}>
     <div className="form-group">
      <Field name="clubName" type="text" component={renderField} label="Club Name" className="form-control"/>
      </div>
    <div className="form-group">
      <FieldArray name="members" component={renderMembers}/>
   </div>   
      <div className="form-group">
        <button className="btn btn-success " type="submit" disabled={submitting}>Submit</button>


        <button className="btn btn-warning " type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'fieldArrays',     // a unique identifier for this form

})(FieldArraysForm)