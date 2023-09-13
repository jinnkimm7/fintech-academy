import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthResult from './pages/AuthResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/authResult' element={<AuthResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
