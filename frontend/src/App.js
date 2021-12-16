import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/ProfileSection.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer'
import ProfilePage from './Components/ProfilePage';
import EditProfilePage from './Components/EditProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProfilePage />}></Route>
          <Route path="/edit" element={<EditProfilePage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
