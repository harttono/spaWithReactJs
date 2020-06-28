import React,{Component} from 'react';
import {Route,Link,BrowserRouter,Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
class Main extends Component{
  render(){
    return (
        <BrowserRouter>
           <Switch>
           <div>
                <h1 className="title">Single Page Application</h1>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                </div>
            </div>
           </Switch>
        </BrowserRouter>
      );
  }
}

export default Main;
