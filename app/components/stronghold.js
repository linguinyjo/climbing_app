var React = require('react');
var api = require('../utils/api');


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
function RenderOpeningTimes(props){
  return (
    <ul className='openingTimes'>
      {props.openingTimes.map((time, index) => {
        return (
          <li style={{padding: '5px'}} key={index}>{time}</li>
        )}
      )}
    </ul>
  )
}
class Stronghold extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'Stronghold Climbing Centre',
          openingTime: ['Monday – Friday 12pm – 10pm', 'Saturday 9am – 7pm', 'Sunday 9am – 9pm'],
          address: '18 Ashley Road Tottenham Hale London N17 9LJ',
          logo: 'https://www.thestrongholduk.com/wp-content/uploads/2017/06/Stronghold-Logo-v2-Copy.jpg',
          setting: {}
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
     var style1= {fontSize: 20, fontWeight: 'bold', marginTop: '50px', marginBottom: '20px'}
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
            <div style= {style1}>Opening Times:</div>
            <RenderOpeningTimes openingTimes={this.state.openingTime}/>            
            <div style= {style1}>Address</div>
            {this.state.address}
            <div style={{marginTop: '20px'}}>
                <img src='https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=51.50022&lon=-0.1265&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*' />
              </div>      
        </ul>
       </div>
      )
    }
}

module.exports = Stronghold;



