import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Policyholder from "./components/policyholder/Policyholder";
import Carriers from "./components/Carriers";
import Contractor from "./components/contractor/Contractor";
import PropertyEnovation from "./components/propertyenovation/PropertyEnovation";
import Plateform from "./components/platform/Plateform";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policyholder" element={<Policyholder />} />
        <Route exact path="/carriers" element={<Carriers />} />
        <Route exact path="/contractor" element={<Contractor />} />
        <Route
          exact
          path="/propertyEnovation"
          element={<PropertyEnovation />}
        />
        <Route exact path="/plateform" element={<Plateform />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
