import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-con">
    <div className="wave">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <li>
      {' '}
      <Link to="/">Home</Link>{' '}
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>{' '}
    </li>
  </div>
)

export default Header
