const React = require('react')
//const Link = require('react-router-dom').Link
const NavLink = require('react-router-dom').NavLink

function Nav(){
    return(
        <ul className='nav'>
					<li>
						<NavLink exact activeClassName='active' to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/centres'>
							Climbing Centres
						</NavLink>
					</li>
        </ul>
    )
}
module.exports = Nav