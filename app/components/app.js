var React = require('react')
var Centres = require('./centres')
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
var Nav = require('./nav')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//var Switch = ReactRouter.Switch;


class App extends React.Component {
  render() {
    
    return (
      <Router>
        <main>
          <div className='container'>
            <Nav />
            <Route path='/centres' component={Centres} />
          </div>
          
        </main>
      </Router>
    )
  }
}
module.exports = App;



