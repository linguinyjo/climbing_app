import React from 'react'

function RenderOpeningTimes(props){
	return (
		<ul className='openingTimes'>
			{props.openingTimes.map((time, index) => {
				return (
					<div key={index}>
						<li style={{padding: '5px'}}>{time}</li>
					</div>
				)}
			)}
		</ul>
	)
}
class RenderInfo extends React.Component {
	render(){
		var style1= {fontSize: 20, fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', }
		return(
			<div style={{paddingBottom: '30px', }}>
				<div style={style1}>Opening Times</div>
          <RenderOpeningTimes openingTimes={this.props.openingTimes}/>            
			</div>
		)
	}
}
export default RenderInfo



