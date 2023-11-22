
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
