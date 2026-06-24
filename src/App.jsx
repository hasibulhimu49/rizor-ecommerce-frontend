import React from 'react'
import Navigation from "./customer/components/navigation/Navigation";
import HomePages from './customer/pages/HomePages';

const App=()=> {
  return (
    <div>
      <Navigation/>
      <div>
        <HomePages/>
      </div>
    </div>
  )
}

export default App;