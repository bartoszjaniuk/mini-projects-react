import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const SubmenuAppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openSubmenu = (text, coords) => {
    const page = sublinks.find((link) => link.page === text);
    console.log(page);
    setPage(page);
    setLocation(coords);
    setSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        submenuOpen,
        sidebarOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
