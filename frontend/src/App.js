import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ProfileSection from './Components/ProfileSection';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ProfileSection />
      </Router>
    </div>
  );
}

export default App;
