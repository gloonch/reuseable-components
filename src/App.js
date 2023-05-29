import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import RegisterWebinar from "./components/webinar/RegisterWebinar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} >
            <Route path="webinar" element={<RegisterWebinar />} />
            <Route path="videoplayer" element={<h1>Player Component</h1>} />
          </Route>
          <Route path="*" element={<h1 className="justify-center">Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
