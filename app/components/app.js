import React  from 'react'
import Centres  from './centres'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './nav'

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
export default App;



