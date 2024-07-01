import React from 'react';
import logo from '../assets/RVS 1.svg'
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Link to='/'>
                  <img src={logo} alt="logo" />
                </Link>
                
                <nav>
                    <ul className='flex justify-between'>
                        <li>
                            <Link to='/'> Acceuil </Link>
                        </li>
                        <li className='mx-10'>
                            <Link to='/Mesrv'>Mes Rendez-vous</Link>  
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link to='/Login'>
                         <button className='bg-sky-600 p-5 rounded-xl text-white'>Connexion</button>
                    </Link>
                    <Link>
                        <button className='mx-10 bg-black p-5 rounded-xl text-white'>Deconnexion</button>
                    </Link>
                </div>

            </div>
            <Outlet />
         </>
    );
};

export default Menu;