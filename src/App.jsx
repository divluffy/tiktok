import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Page from "./components/Page";
function App() {
  const [page, setPage] = useState("Home");

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="content_main">
            <nav>
              <Nav page={page} setPage={setPage} />
            </nav>
            <div className="bowl_tiktok">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile/:username" element={<Profile />} />
                <Route exact path="/post/:id" element={<Page />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
