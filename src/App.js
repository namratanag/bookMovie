import React, { Component } from 'react';
import ViewDetail from './component/viewDetail';
import ViewMovies from './component/viewMovies';
import Header from './component/header';
import FieldArraysForm from './component/FieldArrayForm';
//import {BrowserRouter} from 'react-router-dom';
import history from './hist';
import {Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './component/login';
import RegisterForm from './component/register';
import Cart from './component/cart';
import AddBook from './component/addBook';
import AddMovie from './component/addMovie'
import DetailBook from './component/detail';
class App extends Component {
  render() {
    console.log("ROUTER ADDED APP.js");
    return (
    
     <Router history={history}>
      <div className="App">
      <Header />
       <Route path="/" exact component={ViewMovies}/>
       <Route path="/addBook" exact component={AddMovie} />
       <Route path="/login" exact component={Login}/>
       <Route path="/register" exact component={RegisterForm}/>
       <Route path="/cart" exact component={Cart}/>
       <Route path="/add" exact component={AddMovie}/>
       <Route path="/detail" exact component={ViewDetail}/>
      </div>
      </Router>
     
    );
  }
}

export default App;
