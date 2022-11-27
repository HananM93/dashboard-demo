
import './App.css';
import Analysis from './Component/Analysis';
import Rating from './Component/Rating';
import Reviews from './Component/Reviews';
import SideBar from './Component/SideBar';
import Visitors from './Component/Visitors';



export default function App() {
  return (
    <div className="App">
    <SideBar />
    <Visitors />
    <Reviews />
    <Rating />
    <Analysis />
    </div>
  );
}

