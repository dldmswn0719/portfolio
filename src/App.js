import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    </>
  );
}

export default App;
