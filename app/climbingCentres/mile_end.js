var React = require('react');
var RenderMap = require('../utils/renderMap')
var RenderInfo = require('../utils/renderInfo')

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
				latlng: {lat: 51.5277485, lng: -0.039809},
				url: 'https://www.google.com/maps/dir//Mile+End+Climbing+Wall,+Haverfield+Road,+London/@51.5278344,-0.1098484,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x48761d25cb1841f9:0x945fadaac2f92c47!2m2!1d-0.039809!2d51.5277485!3e2',
				calendarId: ''
			}
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
					<ul >    
					<li style={ {listStyleType: 'none'} }> 
						<div style= {{fontSize: 20, fontWeight: 'bold' }}>Route Setting Schedule:</div>      
						<div style={{fontStyle: 'italic'}}></div>          
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

module.exports = MileEnd;

