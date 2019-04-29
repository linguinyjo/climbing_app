import React from 'react'
import Castle from '../climbingCentres/castle'
import Stronghold from '../climbingCentres/stronghold'
import Yonder from '../climbingCentres/yonder'
import MileEnd from '../climbingCentres/mile_end'

function SelectCentre (props) {
  const climbingCentres = [
    {name: "Castle", img: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1'}, 
    {name: "Stronghold", img: 'https://www.thestrongholduk.com/wp-content/uploads/2017/06/Stronghold-Logo-v2-Copy.jpg'}, 
    {name: "Yonder", img: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p720x720/22528168_1711580125582430_3942011432554940950_n.jpg?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=a3241391a3f5068d44a4f3643f21c81f&oe=5D068C17'}, 
    {name:"Arch", img: 'https://signups.archclimbingwall.com/images/logo-bd009ccb32d821c92251cb73fb91cac7.png?vsn=d'},
    {name: "Mile End", img: 'https://www.mileendwall.org.uk/images/static/sticker-logo.png'}]   
  return (
    <ul className='centres'>
      {climbingCentres.map((centre) => {
        return (
            <li
              key={centre.name} 
              onClick={props.onSelect.bind(null, centre.name)} 
              style={centre.name === props.selectedCentre ? {color: '#d0021b'} : null}>
              <img  className='avatar'
                    src={centre.img}
                    alt={''}
              />
              <ul>{centre.name}</ul>
            </li>
          )
      })}
  </ul>
  )
}

class Centres extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedCentre: '',
        }
    this.updateCentre = this.updateCentre.bind(this);    
    }
    updateCentre(centre) {
        this.setState(() => {
            return {
                selectedCentre: centre,
            }
        })
    }
    render() {
        return (
          <div>
            <SelectCentre 
              onSelect={this.updateCentre}
              selectedCentre={this.state.selectedCentre}
            />
            <div>           
              {!this.state.selectedCentre && null}      
              {this.state.selectedCentre === 'Castle' && <Castle />}
              {this.state.selectedCentre === 'Stronghold' && <Stronghold />}
              {this.state.selectedCentre === 'Yonder' && <Yonder />}
              {this.state.selectedCentre === 'Mile End' && <MileEnd />}
            </div>
         </div>
      )
    }
  }
export default Centres;