import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import store from './redux'
import Header from './components/header'
import Content from './components/content'
import New from './components/new'
import Controversial from './components/controversial'
import Top from './components/top'
import Rising from './components/rising'

class App extends React.Component {
  constructor(){
    super()
    this.state={
        path:'Hot',
        toggle:true
    }
  }
  handleChange = (e) =>{
    const path = e.target.text
    this.setState({path:path})
  }
  onToggle = () =>{
    this.setState({toggle:!this.state.toggle})
  }
  render(){
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          <Router>
            <div>
                <p className="menu-button" onClick={this.onToggle}>Menu: {this.state.path} <span>{this.state.toggle ? "˅" : "˄"}</span></p>
                <ul className={this.state.toggle ? 'navigation-off' : 'navigation-on' }>
                    <li><Link to={'/hot'} onClick={this.handleChange}>Hot</Link></li>
                    <li><Link to={'/new'} onClick={this.handleChange}>New</Link></li>
                    <li><Link to={'/controversial'} onClick={this.handleChange}>Controversial</Link></li>
                    <li><Link to={'/top'} onClick={this.handleChange}>Top</Link></li>
                    <li><Link to={'/rising'} onClick={this.handleChange}>Rising</Link></li>
                </ul>
            <Switch>
                <Route exact path='/' component={Content} />
                <Route path='/hot' component={Content} />
                <Route path='/new' component={New} />
                <Route path='/controversial' component={Controversial} />
                <Route path='/top' component={Top} />
                <Route path='/rising' component={Rising} />
            </Switch>
            </div>
          </Router>
      </div>
    </Provider>
  );
}
}

export default App;
