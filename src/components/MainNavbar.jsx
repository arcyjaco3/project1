import React, { useState, useEffect } from 'react';
import { FaBars, FaUserAlt } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';
import { auth } from '../data/firebaseAuth';



const MainNavbar = () => {
  const [user, setUser] = useState(null);
  const [nav, setNav] = useState(false);

  const mainMenuItems = [
    { id: 1, name: 'Price', path: '/cennik' },
    { id: 2, name: 'news', path: '/aktualnosci' },
    { id: 3, name: 'Contact', path: '/kontakt' },
    { id: 4, name: 'About', path: '/o-nas' },
    { id: 5, name: 'User', path: '/login' },
  ];
  
  const loggedInMenuItems = [
    { id: 1, name: 'Cennik', path: '/nowy-cennik' },
    { id: 2, name: 'Aktualności', path: '/aktualnosci' },
    { id: 3, name: 'Kontakt', path: '/kontakt' },
    { id: 4, name: 'O nas', path: '/o-nas' },
    { id: 5, name: 'user', path: '/login' },
    { id: 6, name: <IoLogOutOutline size={25} className={`text-lg`} />, action: handleLogout, path: '/' },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  function handleLogout() {
    auth.signOut()
      .then(() => {
        console.log('Pomyślne wylogowanie');
        setUser(null);
      })
      .catch((error) => console.error('Błąd podczas wylogowywania:', error));
  }

  const menuItems = user ? loggedInMenuItems : mainMenuItems;

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
          className={`cursor-pointer pr-4 z-10 text-gray-500 md:hidden ${nav ? 'rotate-90 px-4' : 'rotate-0'} duration-500`}
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaBars size={30} className={`text-white`} /> : <FaBars size={30} />}
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

export default MainNavbar;
