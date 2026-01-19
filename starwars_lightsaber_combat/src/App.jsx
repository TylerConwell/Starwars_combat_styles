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
          <img src="/src/assets/shii_cho_cambat_form.png" alt="Shii-Cho Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form II: Makashi</h2>
          <p>A refined style emphasizing precision and elegance, ideal for one-on-one duels.</p>
          <img src="/src/assets/makashi_cambat_form.png" alt="Makashi Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form III: Soresu</h2>
          <p>A defensive style that prioritizes tight blade work and energy conservation.</p>
          <img src="/src/assets/soresu_combat_form.png" alt="Soresu Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form IV: Ataru</h2>
          <p>An acrobatic style that incorporates flips, spins, and aggressive attacks.</p>
          <img src="/src/assets/ataru_combat_form.png" alt="Ataru Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form V: Shien/Djem So</h2>
          <p>A powerful style focusing on strong counterattacks and leveraging an opponent's strength against them.</p>
          <img src="/src/assets/djem_so_combat_form.png" alt="Shien/Djem So Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form VI: Niman</h2>
          <p>A balanced style that combines elements from previous forms, often used by diplomats.</p>
          <img src="/src/assets/niman_combat_form.png" alt="Niman Combat Form" />
        </div>
        <div className="style-card">
          <h2>Form VII: Juyo/Vaapad</h2>
          <p>An aggressive and unpredictable style that channels intense emotions into combat.</p>
          <img src="/src/assets/vaapad_combat_form.png" alt="Juyo/Vaapad Combat Form" />
        </div>
      </div>
      

    </>
  )
}

export default App
