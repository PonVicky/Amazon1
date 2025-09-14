import "../components/styles/Navbar.css";
import Text from "./Text";
function Navbar() {
  return (
    <div className="navbarContainer">
      <ion-icon name="menu-outline"></ion-icon>
      <Text text={"All"} />
      <Text text={"Fresh"} />
      <Text text={"MX Player"} />
      <Text text={"Sell"} />
      <Text text={"Bestsellers"} />
      <Text text={"Today's Deals"} />
      <Text text={"Mobiles"} />
      <Text text={"Prime"} />
      <Text text={"Customer Service"} />
      <Text text={"Electronics"} />
      <Text text={"Fashion"} />
      <Text text={"New Releases"} />
      <Text text={"Home & Kitchen"} />
      <Text text={"Amazon Pay"} />
      <Text text={"Computers"} />
      <Text text={"Books"} />
    </div>
  );
}

export default Navbar;
