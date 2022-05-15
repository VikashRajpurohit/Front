import "./App.css";
import react,{Fragment} from "react";
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frontend from "./components/frontend/frontend";
import Landing from "./components/frontend/Landing";
import Login from "./components/frontend/Login";
import Aboutus from "./components/frontend/Aboutus";
import Registration from "./components/frontend/Registration";
import Services from "./components/frontend/Services";
import Error from "./components/frontend/Error";


import OrganizerDesk from "./components/Organizer/OrganizerDesk";
import ShowClient from "./components/Organizer/ShowClient";
import AddService_Detils from "./components/Organizer/AddService_Detils";
import ShowService_Detils from "./components/Organizer/ShowService_Detils";

import Gallery from "./components/frontend/Gallery";
import Contact from "./components/frontend/Contact";

import Ologout from "./components/Organizer/Ologout";
import PackageCreation from "./components/Organizer/PackageCreation";
import Custdesk from "./components/frontend/Custdesk";
import Forgot from "./components/frontend/Forgot";
import ChangePassword from "./components/frontend/ChangePassword";


const App = () => {
  return (
    <>
    <div className="App">
      
       <Routes>
          <Route path="/" element={<Frontend />}>
                  <Route index element={<Landing />} />
                  <Route path="Login" element={< Login />} />
                  <Route path="About" element={< Aboutus />} />
                  <Route path="Registration" element={< Registration />} />
                  <Route path="Services" element={< Services /> } />
                  <Route path="Error" element={< Error /> } />
                  <Route path="Gallery" element={<Gallery />}/>
                  <Route path="Contact" element={<Contact />}/>
                  <Route path="Custdesk" element={<Custdesk />}/>
                  <Route path="Forgot" element={<Forgot />}/>
                  <Route path="changepassword" element={<ChangePassword />}/>
               
                  

          </Route>

        

          <Route path="/OrganizerDesk" element={<OrganizerDesk />}>
                
                <Route path="PackageCreation" element={<PackageCreation />} />
                <Route path="AddService_Detils" element={<AddService_Detils />} />
                <Route path="ShowService_Detils" element={<ShowService_Detils />} />
                <Route path="ShowClient" element={<ShowClient />} />
                <Route path="Ologout" element={<Ologout />}/>
          </Route>
          <Route path="*" element={<Error />} />
      </Routes> 

    </div>
    
   </>
  );
}

export default App;
