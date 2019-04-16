var React = require('react');
var RenderMap = require('../utils/renderMap')
var RenderInfo = require('../utils/renderInfo')
//var RenderOpeningTimes = require('../utils/renderInfo')



class Castle extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'The Castle Climbing Centre',
          openingTime: ['Monday to Friday: 12pm - 10pm', 'Saturday and Sunday: 9am - 7pm', 'Bank Holidays: 10am - 10pm'],
          address: 'Green Lanes, London N4 2HA',
          logo: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1',
          setting: {},
          latlng: {lat: 51.5653078, lng: -0.0945371}
        }
    }

    render() {
      var style1= {fontSize: 20, fontWeight: 'bold', marginTop: '50px', marginBottom: '20px'}
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
                <div style={{padding: '30px'}}>fuck knows</div>
            </li>
            <div>
            <RenderInfo 
              openingTimes={this.state.openingTime} 
              address={this.state.address}
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

module.exports = Castle;

