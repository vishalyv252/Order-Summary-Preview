import React from 'react'
import Top from './Components/Top';
import Cancel from './Components/Cancel';
import Heading from './Components/Heading';
import Paragraph from './Components/Paragraph';
import Order from './Components/Order';
import Proceed from './Components/Proceed';

const App = () => {
  return (
  <>
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center h-auto w-4/5 rounded-lg bg-white max-w-xs smM:max-w-xs'>
        <Top />
        <Heading />
        <Paragraph />
        <Order />
        <Proceed />
        <Cancel />
      </div>
    </div>
  </>
  )
}

export default App;