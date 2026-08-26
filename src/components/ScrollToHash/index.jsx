import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router non gestisce lo scroll agli anchor: lo replichiamo come faceva Gatsby. */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(hash.slice(1));
    if (element) element.scrollIntoView();
  }, [pathname, hash]);

  return null;
}
