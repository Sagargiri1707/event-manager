import React from 'react';
import './App.css';
import './css/bootstrap.min.css'
import mainCss from './module.css/app.module.css'
import Header from './components/header'
import Footer from './components/footer'
import Core from './core'
function App() {
  return (
    <div className={`${mainCss.container} App`}>
      <div className={`${mainCss.content}`}>
        <Header />
        <Core />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
