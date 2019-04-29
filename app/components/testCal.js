var React = require('react')
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = Calendar.momentLocalizer(moment);

class TestCal extends React.Component {
    constructor() {
        super();
        console.log("hello")
        this.state = {
            events: [
              {
                start: new Date(),
                end: new Date(moment().add(1, "days")),
                title: "Some title"
              }
            ]
        };
    }


  render() {
    
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default TestCal