import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ProfileSection from './Components/ProfileSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/ProfileSection.css";
import TrainingSection from './Components/TrainingSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <div className="parent-container">
                <ProfileSection />
              </div>
              <div className="parent-container">
                <TrainingSection />
              </div>
            </>
          }></Route>
          <Route path="/edit" element={<>Work In Progress</>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
