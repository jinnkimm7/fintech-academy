import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthResult from './pages/AuthResult';
import AccountList from './pages/AccountList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/authResult' element={<AuthResult />} />
        <Route path="/list" element={<AccountList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
