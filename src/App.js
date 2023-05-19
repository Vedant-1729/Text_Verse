import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [text, setText] = useState('light');
  const [alert, setAlert] = useState("HIIII")

  const showAlert = (message, title) => {
    setAlert({
      msg: message,
      type: title,
    })
    // setTimeout(() => {
    //   setAlert(null)
    // }, 2000);
  }

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText('dark')
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled", "success")
      document.title = "TextUtils---light Mode"
    }

    else {
      setMode('dark');
      setText('light')
      document.body.style.backgroundColor = "#023252"
      showAlert("Dark mode enabled", "info")
      document.title = "TextUtils---Dark Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textUtils" about="About Us" mode={mode} changeMode={changeMode} text={text} />
        <Alert alert={alert} />

        <div className="container">

          <Routes>
            <Route exact path='/' element={<Textarea heading="Enter Your Text Here" changeMode={changeMode} text={text} />} />
            <Route exact path='/about' element={<About />} />
          </Routes>

        </div>
      </Router>


    </>
  );
}

export default App;
