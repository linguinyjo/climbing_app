import request from 'superagent';
import moment from 'moment'
const config = require('../config.js')

export default function RenderEvents (id, setting, createSetTitle, callback) {
  const today = moment().format('YYYY-MM-DD');
  const API_KEY = config.calendar
  const CALENDAR_ID = id + '@group.calendar.google.com'  
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  
  request
  .get(url)
  .end((err, resp) => {
    if (!err) {
      JSON.parse(resp.text).items.map((event) => {
        if(event.status === 'cancelled') return;
        if(moment(today).isAfter(event.start.date)) return;
        let circuit = createSetTitle(event.summary)
        
        setting[circuit].push({
          start: event.start.date,
          end: event.end.date,
          title: event.summary,
        })          
      }) 
    callback(setting)
    }
  })
}


