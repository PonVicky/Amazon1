import "../components/styles/Text.css";

function Text({ text }) {
  return (
    <div className="textContainer">
      <p className="textText">{text}</p>
    </div>
  );
}

export default Text;
