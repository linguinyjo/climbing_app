import request from 'superagent';

var today = moment().format('YYYY-MM-DD'); 
const CALENDAR_ID = 'kkbo6hvijn9gk8qicm0t14c88o@group.calendar.google.com'
const API_KEY = 'AIzaSyA09jszrFtOJm7OHBhN2FGHo1ci0T1z5xk'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
  .get(url)
  .end((err, resp) => {
    if (!err) {
      const setting = {
        white: [],
        black: [],
        green: [],
        purple: [],
        comp: [],
      }
      JSON.parse(resp.text).items.map((event) => {
        if(event.status == 'cancelled') return;
        if(moment(today).isAfter(event.start.date)) return;
        let circuit = event.summary.split(' ')[0].toLowerCase()
        
        
        // if(len > 0) {
        //   let lastDate = setting[circuit][len-1]['start']
        //   if(moment(lastDate).isAfter(event.start.date)){
        //     setting[circuit].unshift({
        //       start: event.start.date,
        //       end: event.end.date,
        //       title: event.summary,
        //     })
        //   }
        // }
        
       
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