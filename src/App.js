import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useRoutes} from 'react-router-dom'
import Routes from './Routes';
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';
function App() {
const router = useRoutes(Routes)

  return (
    <>
    <TopBar/>
    <div className="contain">

    <SideBar/>
     {router}
    </div>
    </>
  );
}

export default App;
