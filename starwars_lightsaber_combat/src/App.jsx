import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Star Wars Lightsaber Combat</h1>
        <p>Explore various lightsaber combat styles used by Jedi and Sith throughout the Star Wars universe.</p>
      </div>

      <div className="combat-styles">
        <div className="style-card">
          <h2>Form I: Shii-Cho</h2>
          <p>The most basic form, focusing on wide, sweeping strikes and defense against multiple opponents.</p>
        </div>
        <div className="style-card">
          <h2>Form II: Makashi</h2>
          <p>A refined style emphasizing precision and elegance, ideal for one-on-one duels.</p>
        </div>
        <div className="style-card">
          <h2>Form III: Soresu</h2>
          <p>A defensive style that prioritizes tight blade work and energy conservation.</p>
        </div>
        <div className="style-card">
          <h2>Form IV: Ataru</h2>
          <p>An acrobatic style that incorporates flips, spins, and aggressive attacks.</p>
        </div>
        <div className="style-card">
          <h2>Form V: Shien/Djem So</h2>
          <p>A powerful style focusing on strong counterattacks and leveraging an opponent's strength against them.</p>
        </div>
        <div className="style-card">
          <h2>Form VI: Niman</h2>
          <p>A balanced style that combines elements from previous forms, often used by diplomats.</p>
        </div>
        <div className="style-card">
          <h2>Form VII: Juyo/Vaapad</h2>
          <p>An aggressive and unpredictable style that channels intense emotions into combat.</p>
        </div>
      </div>
      

    </>
  )
}

export default App
