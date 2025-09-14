import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Bags from "./components/Bags";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ImageSlider />
      <Bags />
      <Footer />
    </div>
  );
}

export default App;
