var React = require('react');
var api = require('../utils/api');
var RenderMap = require('../utils/renderMap')
var RenderInfo = require('../utils/renderInfo')


function RenderSetting(props){
  return (
    <ul>
      {Object.values(props.setting).map((item) => {
        let date = moment(item[0]['start']).format('dddd Do of MMMM')
        var styleName;  
        switch(item[0]['title']) {
          case 'White V4-V6 Circuit':
            var styleName = 'whiteCircuit'
              break;
          case 'Black V6-V8+ Circuit':
            var styleName = 'blackCircuit'
              break;
          case 'Green V2-V4 Circuit':
            var styleName = 'greenCircuit'
              break;         
          case 'Purple V3-V5 Circuit':
            var styleName = 'purpleCircuit'
              break;         
          case 'Comp Wall':
            var styleName = 'compCircuit'
              break; 
          default:
            styleName = undefined;
        }
        return (
          <div style={{textAlign: 'center',  }}>
            <li className={styleName} key={item[0].title} style={{margin: '20px', listStylePosition: 'inside', listStyleType: 'none'}}>
              {item[0]['title'] + ' is being reset on: ' + date} 
            </li>
          </div>
        )
        }) 
      }
    </ul> 
  )
}

class Stronghold extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'Stronghold Climbing Centre',
          openingTime: ['Monday – Friday 12pm – 10pm', 'Saturday 9am – 7pm', 'Sunday 9am – 9pm', 'Bank Holidays: 9am – 10pm'],
          website: 'https://www.thestrongholduk.com/',
          address: '18 Ashley Road Tottenham Hale London N17 9LJ',
          logo: 'https://www.thestrongholduk.com/wp-content/uploads/2017/06/Stronghold-Logo-v2-Copy.jpg',
          setting: {},
          latlng: {lat: 51.5907537, lng: -0.0639357},
          url: 'https://www.google.com/maps/dir//Stronghold+Climbing+Centre,+Ashley+Road,+London/@51.5901929,-0.0646453,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48761c250342ff8d:0xf897154aebf7af29!2m2!1d-0.061747!2d51.5907537!3e2',
          calendarId: 'kkbo6hvijn9gk8qicm0t14c88o'
 
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
    
    render () {
      return (
        <div className='boxmodel' id='mobile'> 
           <div> 
              <a href={this.state.website}><img  
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

module.exports = Stronghold;




