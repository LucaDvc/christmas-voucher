import './firebase.config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Voucher from './pages/Voucher';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<PrivateRoute />}>
          <Route path='' element={<Admin />} />
        </Route>
        <Route path='/' element={<Voucher />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
