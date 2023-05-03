// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="web-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />
    </div>
    <div className="nav-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-icon"
      />
    </div>

    <div className="navbar-lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="web-logo"
      />
      <ul className="nav-links-container">
        <li className="link">Home</li>
        <li className="link">Products</li>
        <li className="link">Cart</li>
        <li>
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
