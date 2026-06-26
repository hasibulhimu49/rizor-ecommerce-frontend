import React from 'react'
import Navigation from "./customer/components/navigation/Navigation";
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';

const App=()=> {
  return (
    <div>
      <Navigation/>
      <div>
        <HomePages/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App;