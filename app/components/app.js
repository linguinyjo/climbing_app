import React  from 'react'
import Centres  from './centres'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './nav'
import Home from './home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <div className='container'>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/centres' component={Centres} />
              <Route render={() => <p>Not found</p>} />
            </Switch>
          </div> 
        </main>
      </Router>
    )
  }
}
export default App;



