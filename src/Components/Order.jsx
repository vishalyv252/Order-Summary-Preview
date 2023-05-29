import React from 'react';
import Music from '../Components/Images/icon-music.png';

const Order = () => {
    return (
    <>
        <div className='flex w-auto h-auto font-RHD bg-VPBlue rounded-lg m-3 py-3 px-2'>
            <img src={Music} alt={'Music'} className='w-8 h-8 smX:w-7 smX:h-7 smX:mt-1'/>
            <div className='ml-3'>
                <p className='text-xs text-DBlue font-bold'>Annual Plan</p>
                <p className='text-xs text-DEBlue'>$59.99/year</p>
            </div>
            <div className='ml-14 mt-2 smX:ml-8'>
                <p className='text-xs text-BBlue underline decoration-1 cursor-pointer'>Change</p>
            </div>
        </div>
    </>
    )
}

export default Order;