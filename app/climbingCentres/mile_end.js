import React from 'react'
import RenderMap from '../utils/renderMap'
import RenderInfo from '../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'



class MileEnd extends React.Component {
	constructor() {
			super();
			this.state = {
				name: 'Mile End Climbing Wall',
				openingTime: ["Monday - Friday: 10:00 - 21:30", "Saturday - Sunday: 10:00 - 18:00", 'Bank Holidays: 10:00 – 21:30'],
				website: 'https://www.mileendwall.org.uk/',
				address: 'Haverfield Rd, Mile End, London E3 5BE',
				logo: 'https://www.mileendwall.org.uk/images/static/sticker-logo.png',
				setting: {},
				settingTemplate: { mezz: [],  loft: [],  pen: [],  catacomb: [],  panels: [],  slab: [],  compwall: [] },
				latlng: {lat: 51.5277485, lng: -0.039809},
				url: 'https://www.google.com/maps/dir//Mile+End+Climbing+Wall,+Haverfield+Road,+London/@51.5278344,-0.1098484,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x48761d25cb1841f9:0x945fadaac2f92c47!2m2!1d-0.039809!2d51.5277485!3e2',
				calendarId: 'sjos70i2irfuhfsrps6egjbcok'
				
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
						<div style= {{fontSize: 20, fontWeight: 'bold', paddingBottom: '20px'}}>Route Setting Schedule:</div>      
						<BasicTable data={this.state.setting}/>
          </li>
					<div>
					<RenderInfo 
						openingTimes={this.state.openingTime} 
					/>
					</div>    
					<RenderMap 
						latlng={this.state.latlng}
						name={this.state.name}
						address={this.state.address}
						url={this.state.url}
					/>
				</ul>
		</div>
		)
	}
}
export default MileEnd;

