import './App.css';
// import Lgnavbar from './components/Lgnavbar'
import Navbar from './components/Navbar';
import SectionB from './components/SectionB';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
 {/* <Lgnavbar/> */}
   <Navbar/>
   <SectionB/>
   <Footer/>
    </>
  );
}

export default App;