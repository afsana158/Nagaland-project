import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Overview from "./pages/AboutPages/Overview.jsx"
import Tribes from "./pages/AboutPages/Tribes.jsx"
import Destinations from "./pages/ExplorePages/Destinations.jsx"
import Adventure from "./pages/ExplorePages/Adventure.jsx"
import Culture from "./pages/ExplorePages/Culture.jsx"
import Festivals from "./pages/ExplorePages/Festivals.jsx"
import TravelType from "./pages/PlanPages/TravelType.jsx"
import Itenaries from "./pages/PlanPages/Itenaries.jsx"
import Stays from "./pages/PlanPages/Stays.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/tribes" element={<Tribes />} />
        <Route path="/explore/destinations" element={<Destinations />} />
        <Route path="/explore/adventure" element={<Adventure />} />
        <Route path="/explore/culture" element={<Culture />} />
        <Route path="/explore/festivals" element={<Festivals />} />
        <Route path="/plan/traveltype" element={<TravelType />} />
        <Route path="/plan/itenaries" element={<Itenaries />} />
        <Route path="/plan/stays" element={<Stays />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
