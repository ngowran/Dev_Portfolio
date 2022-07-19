import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/navigation/navbar/navbar.jsx';
import FixedBottomNavigation from './components/layout/navigation/footer/footer.jsx';

function App() {

  return (
    <React.Fragment>
      <ResponsiveAppBar> </ResponsiveAppBar>
    <main>
      <p>Niamhs Dev Portfolio</p>
    </main>
       <FixedBottomNavigation></FixedBottomNavigation>
      </React.Fragment>
  );
 
}

export default App;