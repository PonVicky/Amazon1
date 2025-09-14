import "../components/styles/ImageSlider.css";
import image1 from "../images-and-logos/image1.jpg";
import image2 from "../images-and-logos/image2.jpg";
import image3 from "../images-and-logos/image3.jpg";
import image4 from "../images-and-logos/image4.jpg";
import image5 from "../images-and-logos/image5.jpg";
import { useState } from "react";

import photo1 from "../images-and-logos/photo1.jpg";
import photo2 from "../images-and-logos/photo2.jpg";
import photo3 from "../images-and-logos/photo3.jpg";
import photo4 from "../images-and-logos/photo4.jpg";

import photo5 from "../images-and-logos/photo5.jpg";
import photo6 from "../images-and-logos/photo6.jpg";
import photo7 from "../images-and-logos/photo7.jpg";
import photo8 from "../images-and-logos/photo8.jpg";

import photo9 from "../images-and-logos/photo9.jpg";
import photo10 from "../images-and-logos/photo10.jpg";
import photo11 from "../images-and-logos/photo11.jpg";
import photo12 from "../images-and-logos/photo12.jpg";

import photo13 from "../images-and-logos/photo13.jpg";
import photo14 from "../images-and-logos/photo14.jpg";
import photo15 from "../images-and-logos/photo15.jpg";
import photo16 from "../images-and-logos/photo16.jpg";

import photo17 from "../images-and-logos/photo17.jpg";
import photo18 from "../images-and-logos/photo18.jpg";
import photo19 from "../images-and-logos/photo19.jpg";
import photo20 from "../images-and-logos/photo20.jpg";

import photo21 from "../images-and-logos/photo21.jpg";
import photo22 from "../images-and-logos/photo22.jpg";
import photo23 from "../images-and-logos/photo23.jpg";
import photo24 from "../images-and-logos/photo24.jpg";

import photo25 from "../images-and-logos/photo25.jpg";
import photo26 from "../images-and-logos/photo26.jpg";
import photo27 from "../images-and-logos/photo27.jpg";
import photo28 from "../images-and-logos/photo28.jpg";

import Content from "./Content";
function ImageSlider() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const increment = () => {
    if (index >= 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const decrement = () => {
    if (index <= 0) {
      setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };

  const contents = [
    {
      heading: "Revamp your home in style",
      photo1: photo1,
      photo2: photo2,
      photo3: photo3,
      photo4: photo4,
      description1: "Cushion covers, bedsheets",
      description2: "Figurines, vases & more",
      description3: "Home storage",
      description4: "Lighting solutions",
      additionalText: "Explore all",
    },
    {
      heading: "Appliances for your home | Up to 55% off",
      photo1: photo5,
      photo2: photo6,
      photo3: photo7,
      photo4: photo8,
      description1: "Air conditioners",
      description2: "Refrigerators",
      description3: "Microwaves",
      description4: "Washing machines",
      additionalText: "See more",
    },
    {
      heading: "Starting ₹149 | Headphones",
      photo1: photo9,
      photo2: photo10,
      photo3: photo11,
      photo4: photo12,
      description1: "Starting ₹249 | boAt",
      description2: "Starting ₹349 | boult",
      description3: "Starting ₹649 | Noise",
      description4: "Starting ₹149 | Zebronics",
      additionalText: "See all offers",
    },
    {
      heading: "Automotive essentials | Up to 60% off",
      photo1: photo13,
      photo2: photo14,
      photo3: photo15,
      photo4: photo16,
      description1: "Cleaning accessories",
      description2: "Tyre & rim care",
      description3: "Helmets",
      description4: "Vacuum cleaner",
      additionalText: "See more",
    },
    {
      heading: "Starting ₹149 | Headphones",
      photo1: photo9,
      photo2: photo10,
      photo3: photo11,
      photo4: photo12,
      description1: "Starting ₹249 | boAt",
      description2: "Starting ₹349 | boult",
      description3: "Starting ₹649 | Noise",
      description4: "Starting ₹149 | Zebronics",
      additionalText: "See all offers",
    },
    {
      heading: "under $499 | Deals on Home improvement essentials",
      photo1: photo17,
      photo2: photo18,
      photo3: photo19,
      photo4: photo20,
      description1: "Cleaning supplies",
      description2: "Bathroom accessories",
      description3: "Home tools",
      description4: "Wallpapers",
      additionalText: "Explore all",
    },
    {
      heading: "Starting ₹199 | Amazon Brands & more",
      photo1: photo21,
      photo2: photo22,
      photo3: photo23,
      photo4: photo24,
      description1: "Starting ₹199 | Bedsheets",
      description2: "Starting ₹199 | Curtains",
      description3: "Ironing machine",
      description4: "Home decor",
      additionalText: "See more",
    },
    {
      heading: "Up to 50% off | Baby care & toys | Amazon Brands",
      photo1: photo25,
      photo2: photo26,
      photo3: photo27,
      photo4: photo28,
      description1: "Baby diapers & wipes",
      description2: "Ride ons",
      description3: "RC cars",
      description4: "Baby safety essentials",
      additionalText: "See all offers",
    },
  ];

  return (
    <div className="imagesliderContainer">
      <img alt="nothing" className="images" src={images[index]} />
      <button className="leftImageButton" onClick={decrement}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className="rightImageButton" onClick={increment}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <div className="hugeContainer">
        {contents.map((con, index) => (
          <div>
            <Content key={index} content={con} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
