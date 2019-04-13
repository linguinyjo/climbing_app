var React = require('react');

function RenderOpeningTimes(){

}
class Castle extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'The Castle Climbing Centre',
          openingTime: ['Monday to Friday: 12pm - 10pm', 'Saturday and Sunday: 9am - 7pm', 'Bank Holidays: 10am - 10pm'],
          address: 'Green Lanes, London N4 2HA',
          logo: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1',
          setting: {}
        }
    }

    render () {
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
              <div style= {style1}>Opening Times:</div>
              {this.state.openingTime}
            </div>            
            <div>
              <div style= {style1}>Address</div>
              {this.state.address}
              <div style={{marginTop: '20px'}}>
                <img src='https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=51.50022&lon=-0.1265&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*' />
              </div> 
            </div>
       </ul>
      </div>
      )
    }
}

module.exports = Castle;

