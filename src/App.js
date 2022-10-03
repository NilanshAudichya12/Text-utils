
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [mode, setMode ]= useState('light');
  const [text, setText]= useState('Enable Dark Mode');
  
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor='#172e44'
    }
    else{
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white'
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleText={text} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading= "Text Editor" mode={mode}/>
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
