
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar/index.js';
import { Footer } from './Components/Footer/index.js';
import { Banner } from './Components/Banner/index.js';
import { Skills } from './Components/Skills/index.js';
import { Projects } from './Components/Projects/index.js';
import { Contact } from './Components/Contact/index.js';


function App() {
  return (
    <div className="App">
    <Navigationbar />  
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </div>
  );
}

export default App;
