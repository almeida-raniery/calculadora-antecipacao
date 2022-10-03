import { createContext, useContext, useEffect, useState } from "react";

const WindowDimensionsContext = createContext();

export function WindowDimensionsProvider({ children }) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowDimensionsContext.Provider
      value={{
        getWindowDimensions,
        windowDimensions
      }}
    >
      {children}
    </WindowDimensionsContext.Provider>
  );
}

export const useWindowDimensions = () => useContext(WindowDimensionsContext);
