import React from 'react'
import Navigation from "./customer/components/navigation/Navigation";
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';

const App=()=> {
  return (
    <div>
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        <h1>Hello</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default App;