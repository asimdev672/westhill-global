import './App.css';
import Navbar from './components/Navbar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>

   <Navbar/>
   <SectionA/>
   <SectionB/>
   <SectionC/>
   <Footer/>
    </>
  );
}

export default App;
