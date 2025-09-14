import amazonlogo from "../images-and-logos/amazonlogo.png";
import location from "../images-and-logos/map-pointer.png";
import "../components/styles/Header.css";
import flag from "../images-and-logos/indianflag2.svg";

import cart from "../images-and-logos/cartlogo.png";

function Header() {
  return (
    <div className="headerContainer">
      <img alt="nothing" src={amazonlogo} className="amazonlogo" />
      <nav className="deliveryBox">
        <img alt="nothing" src={location} className="locationLogo" />
        <p>
          Delivering to Hosur 635109 <b>Update location</b>
        </p>
      </nav>
      <nav className="searchBar">
        <button className="allButton">
          All <span className="dropDown">&#9660;</span>
        </button>
        <input type="text" placeholder="Search Amazon.in" className="textbox" />
        <button className="searchButton">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </nav>
      <div className="flags">
        <img alt="nothing" src={flag} width={"20px"} />
        <span className="text1">
          <b> EN</b>
          <span className="dropDown">&#9660;</span>
        </span>
      </div>

      <div className="helloTextBox">
        <p className="helloText1">Hello, sign in</p>
        <p className="helloText2">
          Account & Lists <span className="dropDown">&#9660;</span>
        </p>
      </div>

      <div className="returnTextBox">
        <p className="helloText1">Returns</p>
        <p className="helloText2">& Orders</p>
      </div>

      <div className="cart">
        <img alt="nothing" src={cart} className="cartLogo" />
        <span className="cartText">Cart</span>
      </div>
    </div>
  );
}

export default Header;
