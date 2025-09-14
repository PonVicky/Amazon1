import "../components/styles/Footer.css";
import amazonLogo from "../images-and-logos/amazonlogo.png";

function Footer() {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footerContainer">
      <p onClick={goTop} className="goTopButton">
        Go to top
      </p>
      <div className="innerContainer">
        <div className="innerInnerContainer">
          <nav className="footerTextContainer">
            <h3>Get to Know Us</h3>
            <p>About Amazon</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </nav>
          <nav className="footerTextContainer">
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </nav>
          <nav className="footerTextContainer nextFooterTextContainer">
            <h3>Make Money with Us</h3>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Supply to Amazon</p>
            <p>Becom an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </nav>
          <nav className="footerTextContainer nextFooterTextContainer">
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </nav>
        </div>
        <hr />
        <img alt="nothing" src={amazonLogo} className="footerLogo" />
      </div>
      <div className=" innerBottomContainer">
        <div className="bottomContainer ">
          <nav className="smallText">
            <p>AbeBooks</p>
            <p>Books, art</p>
            <p>& collectibles</p>
          </nav>
          <nav className="smallText">
            <p>Amazon Web Services</p>
            <p>Scalable Cloud</p>
            <p>Computing Services</p>
          </nav>
          <nav className="smallText">
            <p>Audible</p>
            <p>Download</p>
            <p>Audio Books</p>
          </nav>
          <nav className="smallText">
            <p>IMDB</p>
            <p>Movies, TV</p>
            <p>& Celebrities</p>
          </nav>
          <nav className="smallText">
            <p>Shopbop</p>
            <p>Designer</p>
            <p>Fashion Brands</p>
          </nav>
          <nav className="smallText">
            <p>Amazon Business</p>
            <p>Everything For</p>
            <p>Your Business</p>
          </nav>
          <nav className="smallText">
            <p>Prime Now</p>
            <p>2-Hour Delivery</p>
            <p>on Everyday Items</p>
          </nav>
          <nav className="smallText">
            <p>Amazon Prime Music</p>
            <p>100 million sogs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </nav>
        </div>
        <p className="footerText">
          Conditions of Use & Sale&nbsp;&nbsp;&nbsp;&nbsp;Privacy Notice
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interest-Based Ads
        </p>
        <p className="footerText">
          {" "}
          &copy; 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Footer;
