import React from 'react'
import GetEvents from '../utils/api'
import RenderMap from '../utils/renderMap'
import RenderInfo from '../utils/renderInfo'

class Arch extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'The Arch: Building One +',
      openingTime: ['Monday to Friday: 6.30am-10.30pm', 'Saturday and Sunday: 9am-9pm'],
      website: 'https://www.archclimbingwall.com/b1-centre-info',
      address: 'Tower Bridge Business Centre, Drummond Road, London, SE16 4DG',
      logo: 'https://signups.archclimbingwall.com/images/logo-bd009ccb32d821c92251cb73fb91cac7.png?vsn=d',
      settingTemplate: { },
      setting: {},
      latlng: {lat: 51.493427, lng: -0.061045},
      url: 'https://www.google.com/maps/dir//Arch+Climbing+Wall:+Building+One+%2B,+Drummond+Road,+London/@51.4936266,-0.0634279,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48760317c6c17e39:0xd83753afc423f342!2m2!1d-0.0610445!2d51.493427!3e2',
      calendarId: ''
    }
  }
  render() {
    return (
        <div className='boxmodel'> 
          <div > 
            <a href={this.state.website}>
              <img  
              className='centre-logo'
              src={this.state.logo}
              alt={''}/>
            </a>
          </div>
          <ul style={{padding: '0'}}>    
          <li style={ {listStyleType: 'none'} }> 
            <div style= {{fontSize: 20, fontWeight: 'bold', paddingBottom: '20px'}}>Route Setting Schedule:</div>                
          </li>
          <div style={{paddingTop: '30px'}}>
            <RenderInfo 
              openingTimes={this.state.openingTime} 
            />
          </div>
          <div> 
            <RenderMap 
              latlng={this.state.latlng}
              name={this.state.name}
              address={this.state.address}
              url={this.state.url}
            />
          </div>
        </ul>
    </div>
    )
  }
}

export default Arch