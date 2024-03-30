
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import LoginForm from './Auth/LoginForm';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<Userlisting />} />
            <Route path="/user/add" element={<Adduser />} />
            <Route path="/user/edit/:code" element={<Updateuser />} />
          </Routes>
          <ToastContainer className="toast-position" position="bottom-right" />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
