import './App.css';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<HomePage />} />

      </Routes>
    </>
  );
}

export default App;
