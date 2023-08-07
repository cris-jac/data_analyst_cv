import './App.css'
import NavBar from './components/NavBar';
import ParticleBg from './components/ParticleBg';
import Footer from './components/Footer'
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <ParticleBg></ParticleBg>
      <NavBar></NavBar>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
