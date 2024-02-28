/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const mobileContext = createContext();

export const MobileContextProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <mobileContext.Provider value={{ showMobileNav, setShowMobileNav }}>
      {children}
    </mobileContext.Provider>
  );
};
