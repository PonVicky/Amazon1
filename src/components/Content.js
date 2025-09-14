import "../components/styles/Content.css";
import ProductAndDescription from "./ProductAndDescription";
function Content({
  // heading,
  // photo1,
  // photo2,
  // photo3,
  // photo4,
  // description1,
  // description2,
  // description3,
  // description4,
  // additionalText,
  content,
}) {
  return (
    <div className="contentContainer">
      <h2 className="contentHeading">{content.heading}</h2>
      <div className="gridContainer">
        <ProductAndDescription
          productImage={content.photo1}
          productDescription={content.description1}
        />
        <ProductAndDescription
          productImage={content.photo2}
          productDescription={content.description2}
        />
        <ProductAndDescription
          productImage={content.photo3}
          productDescription={content.description3}
        />
        <ProductAndDescription
          productImage={content.photo4}
          productDescription={content.description4}
        />
      </div>
      <p className="additionalText">{content.additionalText}</p>
    </div>
  );
}

export default Content;
