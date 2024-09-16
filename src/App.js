import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { AdoptLanding } from './components/AdoptLanding'

const App = () => {
  return (
    <>
    <div >
      <header ><Header/></header>
      <div className='m-5'>
        <AdoptLanding/>
      </div>






      <footer><Footer/></footer>
    </div>
    </>
  )
}

export default App