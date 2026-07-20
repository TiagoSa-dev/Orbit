import { useState } from 'react'
import './App.css'

import orbit from "./assets/orbit_logo_var_neon_noBack.png";
function App() {
  return (
   
      <div className="bg-[#09090B]">
        <img src={orbit} alt="Orbit"
          className="w-32 h-32 mx-auto top-left-10 "
        />

        <h1 className="text-5xl font-bold text-orange-500">
          Orbit
        </h1>
        <div className="w-32 h-32 mx-auto right-right-10">
          <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pink to Orange</button>
        </div>
      </div>
  
  );
}

export default App;