import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Home } from './components/Home'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#121242"
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = "TextUtils : Dark Mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = "TextUtils : Light Mode"
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-4">

        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyse Below" mode={mode} />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
