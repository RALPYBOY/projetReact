import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='flex'>
            <div className='w-1/4 h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center w-2/4 '>
                <h2 className='text-xl'>Se Connecter</h2>
                <input className='w-full p-4 m-4 bg-slate-300 rounded-xl' type="text" placeholder='Email'/>
                <input className='w-full p-4 m-4 bg-slate-300 rounded-xl' type="password" placeholder='Mot de passe'/>

                <Link className='w-full' to='/Login'>
                    <button className='w-full bg-sky-600 py-2 my-5 rounded-xl text-white'>Connexion</button>
                </Link>
                <Link className='w-full'>
                    <button className='w-full bg-black py-2 my-5 rounded-xl text-white'>Se Connecter avec Google</button>
                </Link>
            </div>
            <div className='w-1/4 h-screen'>

            </div>
        </div>
    );
};

export default Login;