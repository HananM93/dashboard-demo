
import './App.css';
import Analysis from './Component/Analysis';
import Rating from './Component/Rating';
import Reviews from './Component/Reviews';
import SideBar from './Component/SideBar';
import Visitors from './Component/Visitors';

//you might want to add a dashboard component that you bring into App and then put all of these components there, that would just break it down a bit further.

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Reviews />
      <Rating />
      <Analysis />
      <Visitors />
    </div>
  );
}

