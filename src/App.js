import './App.css';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <p style={{color:'white', fontSize:'5rem', height:'100vh'}}>Hey Music <FontAwesomeIcon style={{color:'purple', fontSize:'20rem'}} icon={faMusic}/></p>
    </div>
  );
}

export default App;
