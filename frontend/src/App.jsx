import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* Other sections like Featured Products will go here */}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
