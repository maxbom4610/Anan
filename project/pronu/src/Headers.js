import React from 'react';
import './style.css';
import Bisec from './Bisec' ;
import Forn from './Forn' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Headers extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"Gray",width:"1536px",}} >
         <div className="button" onClick={this.showDropdownMenu}> Menu </div>

          { this.state.displayMenu ? (
          
            <Router>
         <li><a className="active" href="#Create Page">Create Page</a></li>
         <li><Link to="/">Homepage</Link></li>
         <li><Link to="/GuessJD">GuessJD</Link></li>
         <li><Link to="/Bisec">Bisec</Link></li>
         <li><Link to="/Forn">Forn</Link></li>
         <li><Link to="#Setting">Setting</Link></li>
         <li><Link to="#Log Out">Log Out</Link></li>
         <Switch>
          <Route path="/Bisec">
            <Bisec />
          </Route>
          <Route path="/Forn">
            <Forn />
          </Route>

        </Switch>
         </Router>
         
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Headers;