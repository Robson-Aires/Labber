import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Recidencies from './components/Residencies/Residencies'
import Value from './components/Value/Value';
import Contact from './components/contact/Contact';

function App() {
  return (
<div className="App">
  <div>
    <div className="white-gradient" />
 <Header/>
 <Hero />
  </div>
  <Companies />
   <Recidencies />
   <Value />
   <Contact />
   
</div>
  );
}

export default App;
