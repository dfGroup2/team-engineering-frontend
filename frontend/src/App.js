import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ProfileSection from './Components/ProfileSection';
import { BrowserRouter as Router } from 'react-router-dom';
import "./css/ProfileSection.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="parent-container">
        <ProfileSection />
        </div>
      </Router>
    </div>
  );
}

export default App;
