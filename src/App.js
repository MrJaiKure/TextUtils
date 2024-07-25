
import './App.css';
import Navbar from './component/Navbar/Navbar';
import TextForm from './component/MainContent/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'steelblue';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <TextForm heading="Enter your text here" mode={mode} />

    </div>
  );
}

export default App;
