import { useState } from 'react'
import './App.css'

import orbit from "./assets/orbit_logo_var_neon_noBack.png";
function App() {
  return (
    //The overflow hidden class is used to prevent the page from scrolling when the content overflows the viewport. 
    // So that we have a clean black background without scrollbars.
    <div className="bg-black h-screen overflow-hidden">
      <h1 className="text-orange-500 text-4xl font-bold mt-4">
        Orbit
      </h1>
      <div className="flex justify-center mt-4">
        <img src={orbit} alt="Orbit"
          className="w-32 h-32 "
        />
      </div>

      <form>
        <div className="flex justify-end items-end gap-6 mt-40">
          <input className="border rounded px-3 py-2 text-gray-700 w-70"
           type="text" 
           placeholder="Your text" 
           />
          
          <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded px-4 py-2 text-sm font-medium">
            Send
          </button>
        </div>
      </form>
    </div>

  );
}

export default App;