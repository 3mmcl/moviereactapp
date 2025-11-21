import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx"; 
import CandyList from "./components/Candylist.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import TopRated from "./components/TopRated";

function App() {  
  return (
    <>
      <Navbar />
      <header><div className="emptybox"></div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pop" element={<PopularList />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
