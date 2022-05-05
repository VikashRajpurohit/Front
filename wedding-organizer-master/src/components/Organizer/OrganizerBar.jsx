import react from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome,FaUser,FaUserPlus,FaDatabase,FaSignOutAlt} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/OrganizerDesk",
    name: "OrganizerDesk",
    icon: <FaHome />,
  },
  {
    path: "Service_Cat",
    name: "Service_Type",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddService_Cat",
        name: "Add_Type",
        icon: <FaUserPlus />,
      },
      {
        path: "Show_Cat",
        name: "Show_Cat",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    path: "Service",
    name: "Service",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddService_Detils",
        name: "AddService_Detils ",
        icon: <FaUserPlus />,
      },
      {
        path: "ShowService_Detils",
        name: "ShowService_Detils",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    path: "ShowClient",
    name: "ShowClient",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "PackageCreation",
        name: "PackageCreation ",
        icon: <FaUserPlus />,
      },
     
    ],
  },
  {
    path: "Ologout",
    name: "Logout",
    icon: <FaSignOutAlt />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  OrganizerDesk
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}<Outlet/></main>
      </div>
    </>
  );
};

export default SideBar;
