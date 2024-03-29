import "./App.css";
import SideBar from "./components/admin/SideBar";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import TopBar from "./components/admin/TopBar";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";
import Drone from "./pages/admin/Drone";
import AdminApp from "./components/admin/AdminApp";
import RegisterDrone from "./pages/admin/RegisterDrone";
import User from "./pages/admin/User";
import SendMail from "./pages/admin/SendMail";
import SendNotification from "./pages/admin/SendNotification";
import DroneApp from "./components/drone/DroneApp";
import Home from './pages/drone/Home'
import EditFaqs from "./pages/admin/EditFaqs";
import AddFaq from "./pages/admin/AddFaq";
import "./styles/style.css"
import EditHero from "./pages/admin/EditHero";
import EditService from "./pages/admin/EditService";
import AddServices from "./pages/admin/AddServices";

function App() {
   
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path='/' element={ <DroneApp/> }>
                <Route path='/' element={ <Home/> }></Route>
                </Route>








                  <Route path='/admin' element={ <AdminApp/>}>
                        <Route path='/admin' element={ <Dashboard/> }></Route>
                        <Route path='/admin/drone' element={ <Drone/> }></Route>
                        <Route path='/admin/settings' element={ <Settings/> }></Route>
                        <Route path='/admin/reg-drone' element={ <RegisterDrone/> }></Route>
                        <Route path='/admin/users' element={ <User/> }></Route>
                        <Route path='/admin/send-users-mail' element={ <SendMail/> }></Route>
                        <Route path='/admin/send-users-notification' element={ <SendNotification/> }></Route>
                        <Route path='/admin/edit-faqs' element={ <EditFaqs/> }></Route>
                        <Route path='/admin/add-faqs' element={ <AddFaq/> }></Route>
                        <Route path='/admin/edit-hero' element={ <EditHero/> }></Route>
                        <Route path='/admin/edit-service' element={ <EditService/> }></Route>
                        <Route path='/admin/add-service' element={ <AddServices/> }></Route>
                  </Route>
                 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
