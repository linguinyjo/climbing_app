var React = require('react');
var api = require('../utils/api');

function RenderSetting(props){
  return (
    <ul>
      {Object.values(props.setting).map((item) => {
        let date = moment(item[0]['start']).format('"dddd, MMMM Do YYYY')
        return (
          <li key={item[0].title} style={{margin: '20px', listStylePosition: 'inside', listStyleType: 'circle'}}>
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
          openingTime: 'Monday – Friday 12pm – 10pm Saturday 9am – 7pm Sunday 9am – 9pm',
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
              <RenderSetting 
                setting={this.state.setting}
              />        
            </li>
            <li>Opening Times: {this.state.openingTime}</li>
            <li>Address: {this.state.address} </li>
        </ul>
       </div>
      )
    }
}

module.exports = Stronghold;



