var React = require('react')
var Centres = require('./centres.js')

class App extends React.Component {

  render() {
      return (
        <main>
          <div className="container">
            <Centres />
          </div>
        </main>
      )
    }
  }

module.exports = App;



