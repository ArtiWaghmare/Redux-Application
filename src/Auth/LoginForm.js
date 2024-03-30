import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    if (!username || !password) {
      // Display error toast for missing fields
      toast.error('Username and password are required');
      return;
    }

    try {
      // Dispatch login action
      await dispatch(login(username, password));
      // Redirect to home page upon successful login
      navigate('/home');
      // Show success toast
      toast.success('Login successful!');
    } catch (err) {
      // Handle login failure
      console.error('Login error:', err);

    }
  };

  if (isAuthenticated) {
    navigate('/home');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="header-one">Login</div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required  
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required  
                  />
                </div>
                <button type="submit" className="btn btn-primary button-two">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
