import React,{Component} from 'react';
import axios from 'axios';
class DetailBook extends Component{
     constructor(){
                super();
                this.state={
                               books:[],
                               count:0
                           }
                this.getData = this.getData.bind(this);
                
  }
   componentDidMount(){
                this.getData();
                
  }

    getData(){
                axios.get('data/getStore').then(res=>{
                console.log(" component will mount ...." + res.data);  
                this.setState({books:res.data});   
             })
               .catch(function(err){
                console.log("error occured ....." + err)
             });
  }

render(){
    return <div>this is detail {this.props.match.params.id} </div>
}

}

export default DetailBook;
