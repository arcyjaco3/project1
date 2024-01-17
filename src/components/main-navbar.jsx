import React, { useState, useEffect } from 'react';
import { FaBars, FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';
import { auth, useAuth } from '../data/firebaseAuth';

const mainMenuItems = [
  { id: 1, name: 'Cennik', path: '/cennik' },
  { id: 2, name: 'Aktualności', path: '/aktualnosci' },
  { id: 3, name: 'Kontakt', path: '/kontakt' },
  { id: 4, name: 'O nas', path: '/o-nas' },
  { id: 5, name: 'user', path: '/login' }, // Dodano path dla usera
];

const Test = () => {
  const [user, setUser] = useState(null); // Ustaw domyślną wartość na null
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setTimeout(() => {
        setUser(authUser);
      }, 0);
    });
  
    return () => unsubscribe();
  }, []);

  const menuItems = user
    ? [...mainMenuItems, { id: 6, name: 'logout', icon: <IoLogOut />, action: handleLogout, path: '/' }]
    : mainMenuItems;

  function handleLogout() {
    auth.signOut();
  }

  return (
    <>
      <div className="flex justify-end items-center w-full h-20 px-4 text-white bg-black/75 fixed z-10">
        <ul className="hidden md:flex">
          {menuItems.map(({ id, name, path, icon, action }) => (
            <Link
              to={path}
              className="px-10 uppercase"
              key={id}
              onClick={() => {
                setNav(false);
                if (action) action();
              }}
            >
              {icon || (name === 'user' && !user) ? <FaUserAlt /> : name}
            </Link>
          ))}
        </ul>
        <div
          className={`cursor-pointer pr-4 z-10 text-gray-500 ${nav ? 'rotate-90 px-4' : 'rotate-0'} duration-500 md:hidden`}
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaBars size={30} className={`text-white `} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className={`flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 duration-300 ${
              nav ? 'slide-right' : 'slide-left'
            }`}
          >
            {menuItems.map(({ id, name, path, icon, action }) => (
              <Link
                key={id}
                to={path}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                onClick={() => {
                  setNav(false);
                  if (action) action();
                }}
              >
                {icon || (name === 'user' && !user) ? <FaUserAlt /> : name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Test;
