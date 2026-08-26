import { useEffect, useState } from "react";

const BREAKPOINTS = {
  mobile: 767,
  tablet: 1199,
};

const getDeviceType = (width) => {
  if (width <= BREAKPOINTS.mobile) return "mobile";
  if (width <= BREAKPOINTS.tablet) return "tablet";
  return "desktop";
};

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(() =>
    getDeviceType(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

const useCheckSmallScreen = () => {
  const deviceType = useDeviceType();
  return deviceType !== "desktop";
};

export default useCheckSmallScreen;
