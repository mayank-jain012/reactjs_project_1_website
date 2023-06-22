
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Footer from './compnents/Footer';
import Header from './compnents/Header';
import Home from './compnents/Home';
import Contact from './compnents/Contact';
import Service from './compnents/Service';
import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquerry.scss'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact'  element={<Contact />}/>
        <Route path='/services'  element={<Service />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
