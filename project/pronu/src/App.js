import React from 'react';
import Bisec from './Bisec';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {
  constructor() {
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
      <div className="dropdown" style={{ background: "Gray", width: "1536px", }} >
        <div className="button" onClick={this.showDropdownMenu}> Numerical Medthod </div>

        {this.state.displayMenu ? (

          <div>
            <li><a className="active" href="#Create Page">Create Page</a></li>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/Bisec">Bisection</Link></li>
            <li><Link to="/False">False Position</Link></li>
            <li><Link to="/New">Newton</Link></li>
            <li><Link to="/One">Setting</Link></li>
            <li><Link to="#Log Out">Log Out</Link></li>

          </div>

        ) :
          (
            null
          )
        }

      </div>

    );
  }
}

export default App;
