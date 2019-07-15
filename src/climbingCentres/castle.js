import React from'react'
import RenderMap from'../utils/renderMap'
import RenderInfo from'../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'
import TwitterFeed from'../utils/twitterFeed'

class Castle extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'The Castle Climbing Centre',
          openingTime: ['Monday to Friday: 12pm - 10pm', 'Saturday and Sunday: 9am - 7pm', 'Bank Holidays: 10am - 10pm'],
          website: 'https://www.castle-climbing.co.uk/',
          address: 'Green Lanes, London N4 2HA',
          logo: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1',
          settingTemplate: { 'Mezz': [],  'Loft': [],  'Pen': [],  'Catacomb': [],  'Panels': [],  'Quarry': [],  'Compwall': [] },
          setting: {},
          latlng: {lat: 51.5653078, lng: -0.0945371},
          url: 'https://www.google.com/maps/dir//The+Castle+Climbing+Centre,+Green+Lanes,+London+N4+2HA/@51.5653078,-0.0945371,17z/data=!4m16!1m6!3m5!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2sThe+Castle+Climbing+Centre!8m2!3d51.5653078!4d-0.0923484!4m8!1m0!1m5!1m1!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2m2!1d-0.0923484!2d51.5653078!3e2',
          calendarId: 'sjos70i2irfuhfsrps6egjbcok',
          twitterId : '34392367',
          twitterURL: 'https://twitter.com/CastleClimbing',
          instagramURL: 'https://www.instagram.com/thecastleclimbingcentre/',
          facebookURL: 'https://www.facebook.com/Castle-Climbing-%20%20Centre-1456712741264792/?ref=hl', 
        }
    }
    
    createSetTitle = (str) => str.split(' ').join(' ')

    componentDidMount(){
      RenderEvents(this.state.calendarId, this.state.settingTemplate, this.createSetTitle, (setting) => {
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
export default Castle;

