import About from "./About";
import Home from "./Home";
import "./App.css"
import Navbar from "./Nav";
import ImageSlider from "./Slider";
import Footer from "./Footer";


function App() {
  return (
   <div className="">
    <Navbar />
  <Home />
  <About />

  {/* <Project /> */}
  <ImageSlider />
  <Footer/>
   </div>


  );
}

export default App;
