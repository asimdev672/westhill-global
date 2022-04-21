import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Policyholder from './components/policyholder/Policyholder';
// import SectionA from './components/SectionA';
// import SectionB from './components/SectionB';
// import SectionC from './components/SectionC';
// import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>

   <Navbar/>
   {/* <SectionA/>
   <SectionB/>
   <SectionC/>
   <Footer/> */}
   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policyholder" element={<Policyholder />} />
      </Routes>

    </>
  );
}

export default App;
