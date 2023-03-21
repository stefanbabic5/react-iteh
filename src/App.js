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
        <Route path='/' element={<Sabiranje/>}/>
        <Route path='/mnozenje' element={<Mnozenje/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
