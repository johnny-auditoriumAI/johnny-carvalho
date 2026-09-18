// Height of the fixed navigation bar, so a section doesn't land underneath it.
export const NAV_OFFSET = 80;

/**
 * Scrolls to a hash target ("#about") with the fixed nav accounted for.
 * Returns false when the target isn't in the document yet, which lets callers
 * retry while a freshly navigated page mounts.
 */
export function scrollToHashTarget(hash: string): boolean {
  const target = document.querySelector(hash);

  if (!target) {
    return false;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
}
