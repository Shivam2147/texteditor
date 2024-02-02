import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import Alert from './components/alert';
import React, {useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }
  return (
    <>
      <Navbar title="TextEditer" about="About"/>
      <Alert alert={alert}/>
      <Formtext showAlert={showAlert} heading="Enter your text"/>
    </>
  );
}

export default App;
