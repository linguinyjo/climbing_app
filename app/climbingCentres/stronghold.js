var React = require('react');
var api = require('../utils/api');
var RenderMap = require('../utils/renderMap')
var RenderInfo = require('../utils/renderInfo')


function RenderSetting(props){
  return (
    <ul>
      {Object.values(props.setting).map((item) => {
        let date = moment(item[0]['start']).format('"dddd, MMMM Do YYYY')
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
          <li className={styleName} key={item[0].title} style={{margin: '20px', listStylePosition: 'inside', listStyleType: 'none'}}>
            {item[0]['title'] + ' is being reset on: ' + date}
          </li>
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
          openingTime: ['Monday – Friday 12pm – 10pm', 'Saturday 9am – 7pm', 'Sunday 9am – 9pm', 'Bank Holidays: 9am – 10pm'
        ],
          address: '18 Ashley Road Tottenham Hale London N17 9LJ',
          logo: 'https://www.thestrongholduk.com/wp-content/uploads/2017/06/Stronghold-Logo-v2-Copy.jpg',
          setting: {},
          latlng: {lat: 51.5907537, lng: -0.0639357}
        }
    } 
    componentDidMount(){
      api.getEvents((setting) => {
        for(let array in setting) {
          setting[array].sort((a, b) =>  new Date(a['start']) - new Date(b['start']))  
        }
        this.setState({setting})
      })
    }
    
    render () {
      return (
        <div className='boxmodel'> 
           <div> 
              <img  
                className='centre-logo'
                  src={this.state.logo}
                  alt={''}/>
            </div>
          <ul >    
            <li style={ {listStyleType: 'none'} }> 
            <div style= {{fontSize: 20, fontWeight: 'bold'}}>Route Setting Schedule:</div>    
            <RenderSetting setting={this.state.setting}/>        
            </li>
            <div>
              <RenderInfo 
                openingTimes={this.state.openingTime} 
                address={this.state.address}
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



