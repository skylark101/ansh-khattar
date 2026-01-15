import { useEffect, useRef } from "react";

const useScrollTracking = () => {
  const fired50 = useRef(false);
  const fired90 = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = scrollTop / docHeight;

      if (!fired50.current && scrollPercent >= 0.5) {
        fired50.current = true;
        if (window.umami) {
          window.umami.track("Scroll Depth", { percent: 50 });
        }
      }

      if (!fired90.current && scrollPercent >= 0.9) {
        fired90.current = true;
        if (window.umami) {
          window.umami.track("Scroll Depth", { percent: 90 });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

export default useScrollTracking;
