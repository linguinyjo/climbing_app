import React from 'react'
import RenderMap from '../utils/renderMap'
import RenderInfo from '../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'
import TwitterFeed from'../utils/twitterFeed'

class Arch extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'The Arch: Building One +',
      openingTime: ['Monday to Friday: 6.30am-10.30pm', 'Saturday and Sunday: 9am-9pm'],
      website: 'https://www.archclimbingwall.com/b1-centre-info',
      address: 'Tower Bridge Business Centre, Drummond Road, London, SE16 4DG',
      logo: 'https://signups.archclimbingwall.com/images/logo-bd009ccb32d821c92251cb73fb91cac7.png?vsn=d',
      setting: {},      
      settingTemplate: { },
      latlng: {lat: 51.493427, lng: -0.061045},
      url: 'https://www.google.com/maps/dir//Arch+Climbing+Wall:+Building+One+%2B,+Drummond+Road,+London/@51.4936266,-0.0634279,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48760317c6c17e39:0xd83753afc423f342!2m2!1d-0.0610445!2d51.493427!3e2',
      calendarId: '',
      twitterId : '109859867',
      twitterURL: 'https://twitter.com/archclimbing',
      instagramURL: 'http://instagram.com/archclimbing',
      facebookURL: 'https://www.facebook.com/archclimbing/', 
    }
  }
  componentDidMount(){
		RenderEvents(this.state.calendarId, this.state.settingTemplate, (setting) => {
			for(let array in setting) {
				setting[array].sort((a, b) => new Date(a['start']) - new Date(b['start']))
			}
			this.setState({setting})
		})
	}
  render() {
    return (
      <div className='boxmodel'> 
        <div style={{paddingBottom: '75px'}}>
          <div> 
            <a href={this.state.website}>
              <img  
              className='centre-logo'
              src={this.state.logo}
              alt={''}/>
            </a>
          </div>
          <li style={ {listStyleType: 'none'} }> 
            <div id='setting-head'>
              Setting Schedule
            </div>      
            <BasicTable data={this.state.setting}/>         
          </li>
        </div>
        <div className={'div-style-1'}> 
          <TwitterFeed 
            twitterId={this.state.twitterId}
            twitterURL={this.state.twitterURL}
            facebookURL={this.state.facebookURL} 
            instagramURL={this.state.instagramURL}  
          />
        </div> 
        <div style={{paddingTop: '50px', paddingBottom: '50px'}}>
          <RenderInfo 
            openingTimes={this.state.openingTime} 
          />
        </div>
        <div className={'div-style-1'}>
          <RenderMap 
            latlng={this.state.latlng}
            name={this.state.name}
            address={this.state.address}
            url={this.state.url}
          />
        </div> 
      </div>
    )
  }
}

export default Arch