import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ContactProfile } from './components/ContactProfile';
import { SolarSystem } from './components/SolarSystem';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <SolarSystem/>
      <Projects/>
      <ContactProfile/>
    </div>
  );
}

export default App;
