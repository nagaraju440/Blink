import 'antd/dist/antd.min.css'
import logo from './logo.svg';
import './App.css';
// import WebCamera from './WebCam/WebCam';
// import CanvasBasic from './WebCam/CanvasBasic';
import MeshWithMediaPipe from './WebCam/MeshWithMediaPipe';
import Webcam from "react-webcam";
import CounterWithMediaPipe from './WebCam/CounterWithMediaPipe';
import SetIntervalSample from './WebCam/SetInterValSample';
import HomeSection1 from './Components/Home/HomeSection1/HomeSection1'
import { Button } from 'antd';
import Home from './Components/Home/Home';
import Game1Home from './Components/Game1/Game1Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game1Video1 from './Components/Game1/Game1Video1';
import Game1Complete from './Components/Game1/Game1Complete';
import Game2Home from './Components/Game2/Game2Home';
import Game2Video1 from './Components/Game2/Game2Video1';
import Game2Complete from './Components/Game2/Game2Complete';
import Game3Home from './Components/Game3/Game3Home';
import Game3Video from './Components/Game3/Game3Video';
import Game3Complete from './Components/Game3/Game3Complete';
function App() {
  return (
    // <div>
    //   <Webcam/>
    // </div>
    // <SetIntervalSample/>
    <div>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Game1" element={<Game1Home />} />
      <Route path="/Game1/:name" element={<Game1Video1 />} />
      <Route path="/Game1/Completed" element={<Game1Complete />} />
      <Route path="/Game2" element={<Game2Home />} />
      <Route path="/Game3" element={<Game3Home />} />
      <Route path="/Game2/:name" element={<Game2Video1 />} />
      <Route path="/Game2/Completed" element={<Game2Complete />} />
      <Route path="/Game3/:name" element={<Game3Video />} />
      <Route path="/Game3/Completed" element={<Game3Complete />} />

      {/* <Route path="invoices" element={<Ga />} /> */}
    </Routes>
     {/* <Home/> */}
    </div>
    // <Game1Home/>
    // <Home/>
    // <HomeSection1/>
    // <Button type="primary">Primary Button</Button>
    // <CounterWithMediaPipe/>
    // <MeshWithMediaPipe/>
    // <CanvasBasic/>
    // <WebCamera/>
        // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
