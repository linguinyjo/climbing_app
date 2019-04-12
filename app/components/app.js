var React = require('react')
var Centres = require('./centres.js')

class App extends React.Component {
    render() {
      return (
          <div className="container">
            <Centres />
          </div>
      )
    }
  }
module.exports = App;