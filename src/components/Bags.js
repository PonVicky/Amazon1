import "../components/styles/Bags.css";
import bag1 from "../images-and-logos/bag1.jpg";
import bag2 from "../images-and-logos/bag2.jpg";
import bag3 from "../images-and-logos/bag3.jpg";
import bag4 from "../images-and-logos/bag4.jpg";
import bag5 from "../images-and-logos/bag5.jpg";
import bag6 from "../images-and-logos/bag6.jpg";
import bag7 from "../images-and-logos/bag7.jpg";
import bag8 from "../images-and-logos/bag8.jpg";
import bag9 from "../images-and-logos/bag9.jpg";
import bag10 from "../images-and-logos/bag10.jpg";
import bag11 from "../images-and-logos/bag11.jpg";
import bag12 from "../images-and-logos/bag12.jpg";
import bag13 from "../images-and-logos/bag13.jpg";
import bag14 from "../images-and-logos/bag14.jpg";
import bag15 from "../images-and-logos/bag15.jpg";
import bag16 from "../images-and-logos/bag16.jpg";

import gear1 from "../images-and-logos/gear1.jpg";
import gear2 from "../images-and-logos/gear2.jpg";
import gear3 from "../images-and-logos/gear3.jpg";
import gear4 from "../images-and-logos/gear4.jpg";
import gear5 from "../images-and-logos/gear5.jpg";
import gear6 from "../images-and-logos/gear6.jpg";
import gear7 from "../images-and-logos/gear7.jpg";
import gear8 from "../images-and-logos/gear8.jpg";
import gear9 from "../images-and-logos/gear9.jpg";
import gear10 from "../images-and-logos/gear10.jpg";
import gear11 from "../images-and-logos/gear11.jpg";

function Bags() {
  return (
    <div className="wholeContainer">
      <div className="bagContainer">
        <div className="bagHeadingFlex">
          <h2 className="bagHeading">Related to items you've viewed</h2>
          <p>See more</p>
        </div>
        <div className="flexContainer">
          <img alt="nothing" src={bag1} />
          <img alt="nothing" src={bag2} />
          <img alt="nothing" src={bag3} />
          <img alt="nothing" src={bag4} />
          <img alt="nothing" src={bag5} />
          <img alt="nothing" src={bag6} />
          <img alt="nothing" src={bag7} />
          <img alt="nothing" src={bag8} />
          <img alt="nothing" src={bag9} />
          <img alt="nothing" src={bag10} />
          <img alt="nothing" src={bag11} />
          <img alt="nothing" src={bag12} />
          <img alt="nothing" src={bag13} />
          <img alt="nothing" src={bag14} />
          <img alt="nothing" src={bag15} />
          <img alt="nothing" src={bag16} />
        </div>
      </div>
      <div className="gearContainer">
        <div className="bagHeadingFlex">
          <h2 className="bagHeading">
            Starting ₹499 | Gear up for victory, next-level gaming starts here
          </h2>
          <p>See all offers</p>
        </div>
        <div className="flexContainer">
          <img alt="nothing" src={gear1} />
          <img alt="nothing" src={gear2} />
          <img alt="nothing" src={gear3} />
          <img alt="nothing" src={gear4} />
          <img alt="nothing" src={gear5} />
          <img alt="nothing" src={gear6} />
          <img alt="nothing" src={gear7} />
          <img alt="nothing" src={gear8} />
          <img alt="nothing" src={gear9} />
          <img alt="nothing" src={gear10} />
          <img alt="nothing" src={gear11} />
        </div>
      </div>
    </div>
  );
}

export default Bags;
