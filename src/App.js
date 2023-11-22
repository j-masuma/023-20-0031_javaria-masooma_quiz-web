
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import { SecurityUpdates } from './components/SecurityUpdates';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<SecurityUpdates/>}/>
        </Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
