import './App.css';
import Login from './Screens/AuthScreen/Login/Login';
import TabBar from './Screens/TabBar';
import SignUp from './Screens/AuthScreen/SignUp/SignUp';
import Home from './Screens/Planing/ClientSection/Home/Home';
import DomaineCoaching from './Screens/Planing/ClientSection/DomaineCoaching/DomaineCoaching';
import AllCoachs from './Screens/Planing/ClientSection/LookAllCoachs/AllCoachs';
import CoachDetail from './Screens/Planing/ClientSection/CoachDetail/CoachDetail';
import Reservation from './Screens/Planing/ClientSection/Reservation/Reservation';
function App() {
  return (
    <div className="App">
     <Reservation/>
     <TabBar/>
    </div>
  );
}

export default App;
