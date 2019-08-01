import React from 'react'
import RenderMap from '../utils/renderMap'
import RenderInfo from '../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'
import TwitterFeed from'../utils/twitterFeed'

class Yonder extends React.Component {
	constructor() {
			super();
			this.state = {
				name: 'Yonder Climbing Centre',
				openingTime: ["Monday - Friday: 09:00 - 22:00", "Saturday - Sunday: 10:00 - 20:00"],
				website: 'https://thisisyonder.com/',
				address: '4 - 6a Hookers Road London, E17 6DP United Kingdom',
				logo: 'data:image/jpeg;base64,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',
				setting: {},
				settingTemplate: { 'Top Out': [], 'CompWall': [], 'Cave': [], 'Mezz' : [] },
				latlng: {lat: 51.5895819, lng: -0.0429609},
				url: 'https://www.google.com/maps/dir//Yonder,+6+Hooker\'s+Rd,+Walthamstow,+London+E17+6DP/@51.5895819,-0.0429609,17z/data=!4m16!1m6!3m5!1s0x48761dd1f1379079:0x2ec27c30d6c7bc0e!2sYonder!8m2!3d51.5895819!4d-0.0407722!4m8!1m0!1m5!1m1!1s0x48761dd1f1379079:0x2ec27c30d6c7bc0e!2m2!1d-0.0407722!2d51.5895819!3e2',
				calendarId: 'fgraascu8hglukn7a38s5aboec',
				twitterId : '926056287489716224',
				twitterURL: 'https://twitter.com/yondere17?lang=en',
				instagramURL: 'https://www.instagram.com/yondere17/?hl=en',
				facebookURL: 'https://en-gb.facebook.com/yondere17/', 
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

export default Yonder;

