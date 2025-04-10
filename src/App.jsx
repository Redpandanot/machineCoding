import "./App.css";
import Accordion from "./tasks/accordian/Accordion";
import accordionData from "./tasks/accordian/accordionData";
import SearchBar from "./tasks/searchBar/SearchBar";
import StarRating from "./tasks/starRating/StarRating";
import Carousel from "./tasks/carousel/Carousel";
import imageUrls from "./tasks/carousel/imageUrls";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <div className="side-bar">
        <Link to="/star">
          <button>Star Rating Problem</button>
        </Link>
        <Link to="/search">
          <button>AutoComplete Search Bar</button>
        </Link>
        <Link to="/accordion">
          <button>Accordion</button>
        </Link>
        <Link to="/carousel">
          <button>Carousel</button>
        </Link>
      </div>
      <div className="main-bar">
        <Routes>
          <Route path="*" element={<StarRating />} />
          <Route path="/star" element={<StarRating />} />
          <Route path="/search" element={<SearchBar />} />
          <Route
            path="/accordion"
            element={<Accordion data={accordionData} />}
          />
          <Route path="/carousel" element={<Carousel images={imageUrls} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
