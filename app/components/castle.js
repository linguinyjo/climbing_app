var React = require('react');

class Castle extends React.Component {
    constructor() {
        super();
    }

    render () {
        castle = {
            name: 'The Castle Climbing Centre',
            openingTime: 'Monday to Friday: 12pm - 10pm Saturday and Sunday: 9am - 7pm Bank Holidays: 10am - 10pm',
            address: 'Green Lanes, London N4 2HA',
            img: 'https://www.castle-climbing.co.uk/sites/default/files/styles/medium/public/How-to-find-us.jpg?itok=0-bKiwhm'
            }
        return (
            <ul className='popular-list'>
            <li>
            <div className='popular-rank'>{castle.name}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={castle.img}
                  alt={'Avatar for '}
                />
              </li>
              <li>Opening Times: {castle.openingTime}</li>
              <li>Address: {castle.address} </li>
            </ul>
          </li>
        </ul>
        )
    }
}

module.exports = Castle;