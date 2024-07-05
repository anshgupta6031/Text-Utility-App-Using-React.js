import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState("light")

  const toggleMode =()=>{
    if(mode === "dark"){
      (setMode("light"))
      document.body.style.backgroundColor = "white"
    }
    
    else{
      (setMode("dark"))
      document.body.style.backgroundColor = "#313132"
    }
  }


  return (                                            //  only one element can be returned........
    <>                                      {/* empty jsx fragment, used to wrap all the tags in one tag in order to return...... */}

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />               {/* bootstrap nav bar imported and used as a component...... */ }       {/* all the javascript will be written in these curly braces... */ }
                                                                   {/* here, title, aboutText, etc. are props which are sent to the navbar component as variables..... */}
      
      <div className="container">
        <TextForm heading="Enter the text to analyze below." mode={mode} />
      </div>

      <About />

    </>
  );
}

export default App;
