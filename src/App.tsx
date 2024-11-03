import { useState } from 'react'
import ResumeBuilder from './components/ResumeBuilder'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='px-12 pt-12 bg-gray-200 w-full min-h-screen'>
      <Header />
      <ResumeBuilder />
      <Footer />
    </div>
  )
}

export default App
