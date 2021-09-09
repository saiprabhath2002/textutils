
import './App.css';
import Accordian from './component/Accordian';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const change=()=>{
    if(mode==="light")
    {
      setmode("dark");
      document.body.style.backgroundColor='#3a2856';
      showalert("dark mode is enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("light mode is enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
const [alert, setalert] = useState(null);


const showalert =(message,type)=>{
  setalert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 800);
}

  return (
   <>
   <Router>
   <Navbar title="home" theme={mode}  ch={change}/>
   <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <Accordian/>
          </Route>
          <Route exact path="/">
            <Textform heading="enter text hear:"   theme={mode} alert={showalert} />
          </Route>
        </Switch>
    </Router>
  </>
  );
}

export default App;
