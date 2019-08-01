import React from 'react'
import Castle from '../climbingCentres/castle'
import Stronghold from '../climbingCentres/stronghold'
import Yonder from '../climbingCentres/yonder'
import MileEnd from '../climbingCentres/mile_end'
import Arch from '../climbingCentres/arch'

function SelectCentre (props) {
  const climbingCentres = [
    {name: "Castle", img: 'https://storage.ning.com/topology/rest/1.0/file/get/68584701?profile=RESIZE_710x&width=184&height=184&crop=1%3A1'}, 
    {name: "Stronghold", img: 'https://www.thestrongholduk.com/wp-content/uploads/2017/06/Stronghold-Logo-v2-Copy.jpg'}, 
    {name: "Yonder", img: 'data:image/jpeg;base64,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'}, 
    {name:"The Arch", img: 'https://signups.archclimbingwall.com/images/logo-bd009ccb32d821c92251cb73fb91cac7.png?vsn=d'},
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
              {this.state.selectedCentre === 'The Arch' && <Arch />}

            </div>
         </div>
      )
    }
  }
export default Centres;