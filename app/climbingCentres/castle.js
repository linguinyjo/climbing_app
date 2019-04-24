var React = require('react');
var RenderMap = require('../utils/renderMap')
var RenderInfo = require('../utils/renderInfo')
var api = require('../utils/api');


function RenderSetting(props){
  const unknownProblems = []
  for(let key in props.setting){
    if(props.setting[key]['0'] === undefined){
      unknownProblems.push(key)
    } 
  }
  return (
    <ul>
      {Object.values(props.setting).map((item) => {
        if(item.length === 0) return; 
        else {
          let date = moment(item[0]['start']).format("dddd Do of MMMM" )
          return (
            <div style={{textAlign: 'center', margin: 'auto'}}>
            <li key={item[0].title} style={{margin: '20px', listStylePosition: 'inside', listStyleType: 'none'}}>
              {'The ' + item[0]['title'] + ' is being reset on: ' + date}
            </li>
            </div>
          )     
        }})
      }
      {unknownProblems.map((item) => {
        return (
          <div style={{textAlign: 'center', margin: 'auto'  }}>
          <li key={item[0]} style={{margin: '20px', listStylePosition: 'inside', listStyleType: 'none'}}>
            {'There is currently no set date for the ' + unknownProblems[0] }
          </li>
          </div>
          )
      })}
    </ul>
  )
}

class Castle extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'The Castle Climbing Centre',
          openingTime: ['Monday to Friday: 12pm - 10pm', 'Saturday and Sunday: 9am - 7pm', 'Bank Holidays: 10am - 10pm'],
          website: 'https://www.castle-climbing.co.uk/',
          address: 'Green Lanes, London N4 2HA',
          logo: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1',
          setting: {},
          latlng: {lat: 51.5653078, lng: -0.0945371},
          url: 'https://www.google.com/maps/dir//The+Castle+Climbing+Centre,+Green+Lanes,+London+N4+2HA/@51.5653078,-0.0945371,17z/data=!4m16!1m6!3m5!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2sThe+Castle+Climbing+Centre!8m2!3d51.5653078!4d-0.0923484!4m8!1m0!1m5!1m1!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2m2!1d-0.0923484!2d51.5653078!3e2',
          calendarId: 'sjos70i2irfuhfsrps6egjbcok'
        }
    }
    componentDidMount(){
      api.getEvents(this.state.calendarId, (setting) => {
        for(let array in setting) {
          setting[array].sort((a, b) =>  new Date(a['start']) - new Date(b['start']))
        }
        this.setState({setting})
      })
    }
    render() {
        return (
          <div className='boxmodel'> 
            <div> 
              <a href={this.state.website}>
                <img  
                className='centre-logo'
                src={this.state.logo}
                alt={''}/>
              </a>
            </div>
            <ul style={{padding: '0'}}>    
            <li style={ {listStyleType: 'none'} }> 
              <div style= {{fontSize: 20, fontWeight: 'bold'}}>Route Setting Schedule:</div>      
              <RenderSetting setting={this.state.setting}/>          
            </li>
            <div>
            <RenderInfo 
              openingTimes={this.state.openingTime} 
              address={this.state.address}
              url={this.state.url}
            />
            </div>
            
            <RenderMap 
              latlng={this.state.latlng}
              name={this.state.name}
              />
          </ul>
      </div>
      )
    }
}

module.exports = Castle;

