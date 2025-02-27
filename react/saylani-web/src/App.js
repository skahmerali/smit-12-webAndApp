import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import DataUser from './components/home/Data'
// import Home from './Home.js';
// import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <DataUser />
    </div>
  );
}

export default App;
