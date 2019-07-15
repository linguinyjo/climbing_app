import React from 'react'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import request from 'superagent'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const config = require('../config.js')

const localizer = BigCalendar.momentLocalizer(moment) 
const API_KEY = config.calendar

function getEvents (id, centre, callback) {
  const CALENDAR_ID = id + '@group.calendar.google.com' 
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  let events = []
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        JSON.parse(resp.text).items.map((event) => {
          if(event.status == 'cancelled') return;

          events.push({
            start: new Date(moment(event.start.date)),
            end: new Date(moment(event.end.date)),
            title: event.summary,
            centre: centre
          })    
        }) 
        callback(events)
      }
    })
}

class RenderCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      display: {castle: true, stronghold: true, yonder: true},
      castleId: 'sjos70i2irfuhfsrps6egjbcok',
      strongholdId: 'kkbo6hvijn9gk8qicm0t14c88o',
      yonderId: 'fgraascu8hglukn7a38s5aboec',
    }
    this.handleChange = this.handleChange.bind(this)
    this.getData = this.getData.bind(this)

  }
 
  componentDidMount() { 
    this.getData()
  }

  handleChange(event) {
    const {name, type, checked} = event.target
    const nextState = Object.assign({}, this.state.display, { [name]: checked });
    if(type === 'checkbox'){
      this.setState(() => (
        { display: nextState }), this.getData) 
    } 
  }

  getData() {
    this.setState( {events: []}, Object.entries(this.state.display).forEach(([key, value]) => {
      if(value === true){
        getEvents(this.state[`${key}Id`], key, (events) => {         
          this.setState({ events: [...this.state.events, ...events] })       
        })  
      }   
    }))
  }

  render() {
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    function eventStyleGetter (event) {
      let backgroundColor = ''
      
      if(event.centre == 'castle') {
        backgroundColor = 'rgb(51, 159, 179)'
      }
      if(event.centre == 'stronghold') {
        backgroundColor = 'rgb(89, 156, 92)'
      }
      if(event.centre == 'yonder') {
        backgroundColor = 'rgb(228, 206, 135)'
      }
      const style = {
          backgroundColor: backgroundColor,
          borderRadius: '0px',
          opacity: 0.8,
          color: 'black',
          border: '1px',
          display: 'block'
      };
      return {
        style: style
      }
    }
    return (
      <div>
        <div className="Big-Calendar">
          <BigCalendar
            height={'50px'}
            events={this.state.events}
            views={allViews}
            showMultiDayTimes
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
            localizer={localizer}
            eventPropGetter={eventStyleGetter}
          /> 
        </div>
        <div className='div-key'>
          <form>
            <div>
              <label>
                <div>
                  <span className='key castle-key'></span>
                  <span style={{paddingLeft: '10px'}}>The Castle</span>
                  <input type="checkbox" name='castle' checked={this.state.display['castle']} onChange={this.handleChange} />
                </div>
              </label>
            </div>
            <div >
              <label>
                <div>
                  <span className='key stronghold-key'></span>
                  <span style={{paddingLeft: '10px'}}>Stronghold</span>
                  <input type="checkbox" name='stronghold' checked={this.state.display['stronghold']} onChange={this.handleChange} />
                </div>
              </label>
            </div>
            <div>
              <label>
                <div>
                  <span className='key yonder-key'></span>
                  <span style={{paddingLeft: '10px'}}>Yonder</span>
                  <input type="checkbox" name='yonder' checked={this.state.display['yonder']} onChange={this.handleChange} />
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default RenderCalendar

