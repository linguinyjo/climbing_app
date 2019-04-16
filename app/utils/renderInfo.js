var React = require('react');

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
function RenderAddress(props){
	return (
		<div className='address'>{props.address}</div>
	)
}	
class RenderInfo extends React.Component {
  constructor(){
  super();
	}
	
	render (){
		
		var style1= {fontSize: 20, fontWeight: 'bold', marginTop: '50px', marginBottom: '20px'}
		return(
			<div>
				<div style= {style1}>Opening Times:</div>
          <RenderOpeningTimes openingTimes={this.props.openingTimes}/>            
          <div style= {style1}>Address</div>
          <RenderAddress address={this.props.address}/>
			</div>
		)
	}
}

module.exports = RenderInfo



