import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import RegisterWebinar from "./components/webinar/RegisterWebinar";
import DateComparison from "./components/DateComparison";
import Skeleton from "./components/Skeleton";
import LottieAnimation from "./components/LottieAnimation";
import MParallax from "./components/mParallax";

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
          <Route path="/date" element={<DateComparison />} />
          <Route path="/skeleton" element={<Skeleton />} />
          <Route path="/lottie" element={<LottieAnimation />} />
          <Route path="/parallax" element={<MParallax />} />
          <Route path="*" element={<h1 className="justify-center">Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
