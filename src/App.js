import './App.css';
// import Lgnavbar from './components/Lgnavbar'
import Navbar from './components/Navbar';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
 {/* <Lgnavbar/> */}
   <Navbar/>
   <SectionB/>
   <SectionC/>
   <Footer/>
    </>
  );
}

export default App;
