import React from 'react'

function RenderAddress(props){
	return (
		<a href={props.url} className='address'>{props.address}</a>
	)
}
class RenderMap extends React.Component {
    constructor(){
    super();
    } 
    componentDidMount() {
      this.renderMap()
    }
    renderMap = () => {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=${config.map}&callback=initMap`)
      window.initMap = this.initMap
    }
    initMap = () => {
      var myLoc = this.props.latlng
      var map = new window.google.maps.Map(document.getElementById('map'), {
       center: myLoc,
       zoom: 15
     });
      var marker = new google.maps.Marker({
        position: myLoc,
        map: map,
        title: this.props.name
      })
    } 
    render() {
      var style1= {fontSize: 20, fontWeight: 'bold', marginTop: '20px', marginBottom: '20px'}
        return (
          <div>
            <div style={style1}>Address</div>
            <RenderAddress address={this.props.address} url={this.props.url}/>
            <div id='map'></div>
          </div>  
        )
      }
    }
    function loadScript(url) {
        var index = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = url
        script.asytn = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
    }
export default RenderMap;