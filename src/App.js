import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "dark") {
      (setMode("light"))
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been Activated.", "success")
    }

    else {
      (setMode("dark"))
      document.body.style.backgroundColor = "#313132"
      showAlert("Dark mode has been Activated.", "success")
    }
  }


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })


    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (                                            //  only one element can be returned........
    <>                                      {/* empty jsx fragment, used to wrap all the tags in one tag in order to return...... */}

      <Router>
        
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />               {/* bootstrap nav bar imported and used as a component...... */}       {/* all the javascript will be written in these curly braces... */}
                                                                                                        {/* here, title, aboutText, etc. are props which are sent to the navbar component as variables..... */}

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below." mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;
