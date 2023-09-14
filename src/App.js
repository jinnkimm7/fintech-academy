import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthResult from './pages/AuthResult';
import AccountList from './pages/AccountList';
import Balance from './pages/Balance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/authResult' element={<AuthResult />} />
        <Route path="/list" element={<AccountList />}></Route>
        <Route path="/balance" element={<Balance />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
