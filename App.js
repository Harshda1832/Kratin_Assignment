// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Routine from './pages/Routine';
import Services from './pages/Services';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Routine" element={<Routine/>}/>
      <Route path="/Service" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    

    
    
    </>
  );
}

export default App;
