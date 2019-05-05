import React from'react'
import RenderMap from'../utils/renderMap'
import RenderInfo from'../utils/renderInfo'
import RenderEvents from'../utils/api'
import BasicTable from '../components/reactTable'

class Castle extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'The Castle Climbing Centre',
          openingTime: ['Monday to Friday: 12pm - 10pm', 'Saturday and Sunday: 9am - 7pm', 'Bank Holidays: 10am - 10pm'],
          website: 'https://www.castle-climbing.co.uk/',
          address: 'Green Lanes, London N4 2HA',
          logo: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1',
          settingTemplate: { mezz: [],  loft: [],  pen: [],  catacomb: [],  panels: [],  slab: [],  compwall: [] },
          setting: {},
          latlng: {lat: 51.5653078, lng: -0.0945371},
          url: 'https://www.google.com/maps/dir//The+Castle+Climbing+Centre,+Green+Lanes,+London+N4+2HA/@51.5653078,-0.0945371,17z/data=!4m16!1m6!3m5!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2sThe+Castle+Climbing+Centre!8m2!3d51.5653078!4d-0.0923484!4m8!1m0!1m5!1m1!1s0x48761c78f3bd2b2f:0x199c4e5bc2b69b44!2m2!1d-0.0923484!2d51.5653078!3e2',
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
            <div > 
              <a href={this.state.website}>
                <img  
                className='centre-logo'
                src={this.state.logo}
                alt={''}/>
              </a>
            </div>
            <ul style={{padding: '0'}}>    
            <li style={ {listStyleType: 'none'} }> 
              <div style= {{fontSize: 20, fontWeight: 'bold', paddingBottom: '20px'}}></div>      
						  <BasicTable data={this.state.setting}/>         
            </li>
            <div style={{paddingTop: '30px'}}>
              <RenderInfo 
                openingTimes={this.state.openingTime} 
              />
            </div>
            <div> 
              <RenderMap 
                latlng={this.state.latlng}
                name={this.state.name}
                address={this.state.address}
                url={this.state.url}
              />
            </div>
          </ul>
      </div>
      )
    }
}
export default Castle;

// function RenderSetting(props){
//   const unknownProblems = []
//   const knownProblems = []
//   for(let route in props.setting){
//     if(props.setting[route][0]){
//       knownProblems.push([route, props.setting[route][0]['start']])   
//     }  
//   }
//   knownProblems.sort((a, b) => {
//     return new Date(a[1]) - new Date(b[1])
//   });
//   for(let key in props.setting){
//     if(props.setting[key]['0'] === undefined){
//       unknownProblems.push(key)
//     } 
//   }
//   return (
//     <ul style={{width: '53%', margin: 'auto'}}>
//       {knownProblems.map((item) => {
//         let date = moment(item[1]).format("dddd Do of MMMM")
//         return (
//           <div key={item[0]} style={{textAlign: 'justify', margin: 'auto'}}>
//             <li style={{margin: '10px', listStylePosition: 'inside', listStyleType: 'none'}}>
//               {`The ${item[0]} is being reset on: ${date}`}
//             </li>
//           </div>
//         )     
//       })}
//       {unknownProblems.map((item) => {
//         return (
//           <div key={item[0]} style={{textAlign: 'justify', margin: 'auto'  }}>
//           <li  style={{margin: '10px', listStylePosition: 'inside', listStyleType: 'none'}}>
//             {`There is currently no set date for the ${item}`}
//           </li>
//           </div>
//         )
//       })}
//     </ul>
//   )
// }