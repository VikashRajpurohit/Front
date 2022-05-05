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

import AdminDesk from "./components/Admin/AdminDesk";
import AddService from "./components/Admin/AddService";
import ShowService from "./components/Admin/ShowService";
import ShowUser from "./components/Admin/ShowUser";

import OrganizerDesk from "./components/Organizer/OrganizerDesk";
import Show_Cat from "./components/Organizer/Show_Cat";
import AddService_Cat from "./components/Organizer/AddService_Cat";
import ShowClient from "./components/Organizer/ShowClient";
import Registration_client from "./components/frontend/Registration_client";
import AddService_Detils from "./components/Organizer/AddService_Detils";
import ShowService_Detils from "./components/Organizer/ShowService_Detils";

import Gallery from "./components/frontend/Gallery";
import Contact from "./components/frontend/Contact";
<<<<<<< HEAD
import Logout from "./components/frontend/Logout";
import Alogout from "./components/Admin/Alogout";
import Ologout from "./components/Organizer/Ologout";
import PackageCreation from "./components/Organizer/PackageCreation";
=======
import Detail_Services from "./components/frontend/Detail_Services";
>>>>>>> 70e1f40197d38282aaf51d2f136b4c16127618a3

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
                  <Route path="Registration_client" element={< Registration_client />} />
                  <Route path="Services" element={< Services /> } />
                  <Route path="Error" element={< Error /> } />
                  <Route path="Gallery" element={<Gallery />}/>
                  <Route path="Contact" element={<Contact />}/>
<<<<<<< HEAD
               
=======
                  <Route path="Detail_Services" element={<Detail_Services />}/>
>>>>>>> 70e1f40197d38282aaf51d2f136b4c16127618a3
                  

          </Route>

          <Route path="/AdminDesk" element={<AdminDesk />}>
                <Route path="Addservice" element={<AddService />} />
                <Route path="ShowService" element={<ShowService />} />
                <Route path="ShowUser" element={<ShowUser />} />
                <Route path="Alogout" element={<Alogout />}/>
          </Route>

          <Route path="/OrganizerDesk" element={<OrganizerDesk />}>
                
                <Route path="AddService_Cat" element={<AddService_Cat />} />
                <Route path="Show_Cat" element={<Show_Cat />} />
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
