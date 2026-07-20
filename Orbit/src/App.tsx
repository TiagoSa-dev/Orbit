import { useState } from 'react'
import './App.css'

import orbit from "./assets/orbit_logo_var_neon_noBack.png";
function App() {
  return (
    <body className='bg-gray-900 text-white p-8' >
      <div>
        <img src={orbit} alt="Orbit"
          className="w-32 h-32 mx-auto top-left-10 "
        />

        <h1 className="text-5xl font-bold text-orange-500">
          Orbit
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Send
        </button>

      </div>
    </body>
  );
}

export default App;