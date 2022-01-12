import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/ProfileSection.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer'
import ProfilePage from './Components/GradProfileComponents/ProfilePage';
import EditProfilePage from './Components/EditProfileComponents/EditProfilePage';
import EditPersonalInfoSection from './Components/EditProfileComponents/EditPersonalInfoSection';
import EditPersonalStory from './Components/EditProfileComponents/EditPersonalStory';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/SignUpComponent/SignUp';
import IndustryProfilePage from './Components/IndustryProfileComponents/IndustryProfilePage';
import ViewGraduates from './Components/IndustryProfileComponents/ViewGraduates';
import CurrentVacancies from './Components/IndustryProfileComponents/CurrentVacancies';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/graduatePage" element={<ProfilePage />}></Route>
          <Route path="/edit" element={<div className="parent-container">
            <EditProfilePage />
            <br /><br />
          </div>
          }></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/IndustryProfile" element={<div className="parent-container">
            <IndustryProfilePage />
            <div className="parent-container">
              <ViewGraduates />
            </div><br /><br />

            <div className="parent-container">
              <CurrentVacancies />
            </div>
          </div>
          }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
