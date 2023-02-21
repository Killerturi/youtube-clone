import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:input"
            element={
              <>
                <div className="app_page">
                  <SideBar />
                  <Search />
                </div>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div className="app_page">
                  <SideBar />
                  <RecommendedVideos />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// start at 2.48.21
