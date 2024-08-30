import './App.css';
import Desc from './Components/Description';
import Firstname from './Components/fname';
import Lname from './Components/lname';
import Sec from './Components/Section';


function App() {
  return (
    <div className="App">
      <Lname/>
      <Firstname/>
      <Sec/>
      <Desc/>
    </div>
  );
}

export default App;
