import "../components/styles/ProductAndDescription.css";
function ProductAndDescription({ productImage, productDescription }) {
  return (
    <div className="productAndDescriptionContainer">
      <img alt="nothing" src={productImage} className="productImage" />
      <p className="imageDescription">{productDescription}</p>
    </div>
  );
}

export default ProductAndDescription;
