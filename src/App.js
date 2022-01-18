import React, { Component } from 'react';
import classes from './App.module.css';
import FrontPage from './containers/frontPage';
import Projects from './containers/projects';

class App extends Component {

  state = {
    currentPage: 'welcome',
    projectRef: React.createRef(),
    appRef: React.createRef()
  }

  componentDidMount(){
    this.state.appRef.current.scrollIntoView(true, {behavior: 'smooth' })
  }

  clickHandler = () => {
    this.state.projectRef.current.scrollIntoView(true, {behavior: 'smooth' })
    console.log('clicked');
  }

  render() {
    return (
      <div className={classes.App}>
        <FrontPage ref={this.state.appRef} clicked={this.clickHandler}/>
        {/* <Projects ref={this.state.projectRef}/> */}
      </div>
    );
  }
}
export default App;
