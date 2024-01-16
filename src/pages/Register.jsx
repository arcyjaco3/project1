
import React, { useState } from 'react';
import imageBackground from '../assets/images/gym3.jpg'
import {auth} from '../data/firebase.js/'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'





const Register = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const Register = async () => {
        try{
            const user = createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            
            console.log(user)
            navigate('/home')
        }
        catch(err){
            console.log(err.message);
        }
    }
  

    

    return (
        <div className="flex items-center justify-center h-screen bg-cover" style={{background: `url(${imageBackground})`}}>
            <div className="flex flex-col align-center justify-center w-full max-w-md mx-auto mt-10">
                <form className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Your Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-confirm">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password-confirm"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={Register}
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    Already Create an Account?{' '}
                    <a className="text-blue-500 hover:text-blue-700" href="#">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
