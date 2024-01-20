import React, { useState } from 'react';
import imageBackground from '../assets/images/gym3.jpg';
import { auth } from '../data/firebase.js';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

import { validatePassword } from '../utils/passwordUtilis.jsx';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const Register = async () => {

    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    try {
      if (password.trim() === '' && confirmPassword.trim() === '') {
        setPasswordError('Please enter a password');
        setConfirmPasswordError('Please enter a password');
        return;
      } else if (!validatePassword(password, confirmPassword)) {
        setConfirmPasswordError('Passwords do not match');
        return;
      } else {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
          setEmailError('Email is already in use');
          return;
        } else if (email.trim() === '') {
          setEmailError('Email is empty');
          return;
        } else {
          const user = await createUserWithEmailAndPassword(auth, email, password);
          console.log(user);
          navigate('/login');
        }
      }
    } catch (err) {
      console.error(err.message);
      console.error(err.stack);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover" style={{ background: `url(${imageBackground})` }}>
      <div className="flex flex-col align-center justify-center w-full max-w-md mx-auto mt-10">
        <form className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Email input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
              id="email"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Your Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
          </div>

          {/* Confirm Password input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-confirm">
              Confirm Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                confirmPasswordError ? 'border-red-500' : ''
              }`}
              id="password-confirm"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>}
          </div>

          {/* Register button */}
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type='button'
              onClick={Register}
            >
              Register
            </button>
          </div>
        </form>
        {/* Login link */}
        <p className="text-center text-gray-500 text-xs">
          Already have an account?{' '}
          <Link to={'/login'} className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
