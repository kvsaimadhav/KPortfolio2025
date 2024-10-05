import './App.css';
import Menu from './component/Menu.js';
import Home from  './component/Home.js';
import Work from './component/Work.js';
import Project from './component/Project.js';
import Academic from './component/Academic.js';
import Contact from  './component/Contact.js';
import CopyRight from  './component/CopyRight.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Home />
      <Work />
      <Project />
      <Academic />
      <Contact />
      <CopyRight />
    </div>
  );
}

export default App;
