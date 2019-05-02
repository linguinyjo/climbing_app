import React from 'react'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import request from 'superagent'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment) 
const API_KEY = config.calendar


function getEvents (id, callback) {
  const CALENDAR_ID = id + '@group.calendar.google.com' 
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  let events = []
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        JSON.parse(resp.text).items.map((event) => {
          let centre = ''
          if(event.status == 'cancelled') return;
          if(event.htmlLink.match(/pvczcwaTJ/)){
            centre = 'castle'
          }
          else { centre = 'stronghold' } 
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
      eventsStr: [],
      showCastle: true,
      castleId: 'sjos70i2irfuhfsrps6egjbcok',
      showStronghold: true,
      strongholdId: 'kkbo6hvijn9gk8qicm0t14c88o'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    if(this.state.showCastle === true){
      getEvents(this.state.castleId, (events) => {         
        this.setState({ events })       
      })
    }
    if(this.state.showStronghold === true){
      getEvents(this.state.strongholdId, (events) => {    
        this.setState({ events: [...this.state.events, ...events] }) 
      })
    }
  }
  handleChange() {
    const {name, value, type, checked} = event.target   
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  render() {
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    function eventStyleGetter (event, start, end, isSelected) {
      let backgroundColor = ''
      if(event.centre == 'castle') {
        backgroundColor = 'rgb(51, 159, 179)'
      }
      if(event.centre == 'stronghold') {
        backgroundColor = 'rgb(89, 156, 92)'
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
            defaultDate={new Date('05/02/2019')}
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
                  <input type="checkbox" name='showCastle' checked={this.state.showCastle} onChange={this.handleChange} />
                </div>
              </label>
            </div>
            <div >
              <label>
                <div>
                  <span className='key stronghold-key'></span>
                  <span style={{paddingLeft: '10px'}}>Stronghold</span>
                  <input type="checkbox" name='showStronghold' checked={this.state.showStronghold} onChange={this.handleChange} />
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

