import { useState } from 'react'
import ResumeBuilder from './components/ResumeBuilder'
import Footer from './components/Footer'

function App() {

  return (
    <div className='px-12 pt-12 bg-gray-200 w-full min-h-screen'>
      <h1 className=' text-5xl font-bold pb-2'>Resume Builder</h1>
      <p className=' text-slate-600'>Create your own brand new resume in less than 5 minutes.</p>
      <ResumeBuilder />
      <Footer />
    </div>
  )
}

export default App
