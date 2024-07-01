import React from 'react';
import image1 from '../assets/image.svg'
import { Link } from 'react-router-dom';

const Acceuil = () => {
    return (
        <>
            <div className='grid grid-cols-2 items-center'>
                <div className='m-10'>
                    <h1 className='text-8xl'>Rendez-vous</h1>
                    <p className='my-10'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto accusamus quae impedit, 
                        autem vel aspernatur expedita ipsum laborum explicabo ducimus consequuntur, repudiandae vitae 
                        veritatis id quasi itaque numquam, molestiae eligendi?
                    </p>
                    <Link to='/Login'>
                        <button className='bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full'>Commencez</button>
                    </Link>
                </div>
                <div>
                    <img src={image1} alt="" className='w-200'/>
                </div>
            </div>
        </>
    );
};

export default Acceuil;