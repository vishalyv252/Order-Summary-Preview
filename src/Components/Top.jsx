import React from 'react'
import TopImage from '../Components/Images/illustration-hero.png'

const Top = () => {
    return (
    <>
        <div>
            <img src={TopImage} alt={"TopImage"} className='w-auto h-auto rounded-t-lg' />
        </div>
    </>
    )
}

export default Top;