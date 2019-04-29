import request from 'superagent';

export default function GetEvents (id, callback) {  
  const today = moment().format('YYYY-MM-DD');
  const CALENDAR_ID = id + '@group.calendar.google.com'
  const API_KEY = config.calendar
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  request
  .get(url)
  .end((err, resp) => {
    if (!err) {
      if (resp.body.summary == 'stronghold_climbing'){
        var setting = {
          white: [], black: [], green: [], purple: [], comp: [],
        }
      }
      else if (resp.body.summary == 'castle_climbing'){
        var setting = {
             mezz: [],  loft: [],  pen: [],  catacomb: [],  panels: [],  slab: [],  compwall: []                 
        }
      }
      JSON.parse(resp.text).items.map((event) => {
        if(event.status == 'cancelled') return;
        if(moment(today).isAfter(event.start.date)) return;
        let circuit = event.summary.split(' ')[0].toLowerCase()
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

