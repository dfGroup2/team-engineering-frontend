import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ProfileSection from './Components/ProfileSection';
import { BrowserRouter as Router } from 'react-router-dom';
import "./css/ProfileSection.css";
import TrainingSection from './Components/TrainingSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="parent-container">
          <ProfileSection />
        </div>
        <div className="parent-container">
          <TrainingSection />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
