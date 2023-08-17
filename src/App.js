// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React , {useState} from 'react'

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);

    
  }

  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#0d173b'
        showAlert('Dark mode has been enabled','success')
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert('Light mode has been enabled','success')

    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter below" mode={mode} />
    <About/>
    </div> */}

    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">     
          {/* <Routes>
            <Route exact path="/about" element={<About />} >*/}
            {/* <About mode={mode}/> */}
            {/*</Route> */}
            {/* <Route exact path="/home" element={ */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
            {/* }> */}
            {/* </Route>
          </Routes> */}
      </div>
    {/* </Router> */}
    </>
  )
}

export default App;
