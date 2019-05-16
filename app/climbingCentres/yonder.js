import React from 'react'
import RenderMap from '../utils/renderMap'
import RenderInfo from '../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'

class Yonder extends React.Component {
	constructor() {
			super();
			this.state = {
				name: 'Yonder Climbing Centre',
				openingTime: ["Monday - Friday: 09:00 - 22:00", "Saturday - Sunday: 10:00 - 20:00"],
				website: 'https://thisisyonder.com/',
				address: '4 - 6a Hookers Road London, E17 6DP United Kingdom',
				logo: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p720x720/22528168_1711580125582430_3942011432554940950_n.jpg?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=a3241391a3f5068d44a4f3643f21c81f&oe=5D068C17',
				setting: {},
				settingTemplate: { 'Top Out': [], 'CompWall': [], 'Cave': [], 'Mezz' : [] },
				latlng: {lat: 51.5895819, lng: -0.0429609},
				url: 'https://www.google.com/maps/dir//Yonder,+6+Hooker\'s+Rd,+Walthamstow,+London+E17+6DP/@51.5895819,-0.0429609,17z/data=!4m16!1m6!3m5!1s0x48761dd1f1379079:0x2ec27c30d6c7bc0e!2sYonder!8m2!3d51.5895819!4d-0.0407722!4m8!1m0!1m5!1m1!1s0x48761dd1f1379079:0x2ec27c30d6c7bc0e!2m2!1d-0.0407722!2d51.5895819!3e2',
				calendarId: 'fgraascu8hglukn7a38s5aboec'
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
						<div id='setting-head'>Setting Schedule</div>      
						<BasicTable data={this.state.setting}/>         
					</li>
				</div> 
				<div className={'div-style-1'}>
				<RenderInfo 
						openingTimes={this.state.openingTime} 
					/> 
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

