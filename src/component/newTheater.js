import React,{Component} from 'react';
import {Field , reduxForm} from 'redux-form';
import './newTheater.css';

class NewTheater extends Component {
 x = 1;

  render() {
      return ( <div className="box"><div className="form-group" >
          <label htmlFor="theater">Theater {this.props.index}</label>
        <Field name={`theater[${this.props.index}]` } id="theater" component="input" type="text"  className="form-control"/>
        </div>
         <div className="form-group">
          <label htmlFor="price">Price</label>
        <Field name={`price[${this.props.index}]`} id="price" component="input" type="text"  className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
        <Field name={`time[${this.props.index}]`} id="time" component="input" type="text"  className="form-control"/>
        </div>
         <div className="form-group">
          <label htmlFor="screen">Screen</label>
        <Field name={`screen[${this.props.index}]`} id="screen" component="input" type="text" className="form-control" />
        </div>
       </div>)
  }
}

export default NewTheater;