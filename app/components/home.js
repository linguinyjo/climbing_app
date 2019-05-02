import React from 'react'
import RenderCalendar from '../utils/renderCalender'
import Example from './reactTable'

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h2>Climbing in London</h2>
        <div>
        <RenderCalendar />
        </div>
      </div>
    )
  }
}

export default Home