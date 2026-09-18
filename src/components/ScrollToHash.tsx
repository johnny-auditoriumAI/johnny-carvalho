import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHashTarget } from "@/lib/scroll";

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
      if (scrollToHashTarget(hash)) {
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
