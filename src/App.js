import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (                                            //  only one element can be returned........
    <>                                      {/* empty jsx fragment, used to wrap all the tags in one tag in order to return...... */}

      <Navbar title="TextUtils" aboutText="About" />               {/* bootstrap nav bar imported and used as a component...... */ }       {/* all the javascript will be written in these curly braces... */ }
                                                {/* here, title and aboutText are prop which are sent to the navbar component as variables..... */}
    </>
  );
}

export default App;
