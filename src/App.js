import './App.css';
import Mnozenje from './components/Mnozenje';
import Sabiranje from './components/Sabiranje';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route to='/' element={<Sabiranje/>}/>
        <Route to='/mnozenje' element={<Mnozenje/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
