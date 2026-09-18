import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Height of the fixed navigation bar, so a section doesn't land underneath it.
const NAV_OFFSET = 80;

/**
 * React Router does not scroll to hash fragments on navigation, so links like
 * "/#experience" from a project page would change the URL and leave the visitor
 * at the top of the home page. This restores the expected behaviour.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    let frame = 0;
    let attempts = 0;

    // After a cross-page navigation the target section isn't mounted on the
    // first frame, so retry briefly before giving up.
    const scrollToTarget = () => {
      const target = document.querySelector(hash);

      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
        return;
      }

      if (attempts++ < 20) {
        frame = requestAnimationFrame(scrollToTarget);
      }
    };

    frame = requestAnimationFrame(scrollToTarget);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
