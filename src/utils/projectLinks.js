/** Placeholder copy (e.g. "TODO(SUP-1009): ...") is styled differently. */
export const isTodo = (text) =>
  typeof text === "string" && text.startsWith("TODO(");

/** Is this a link to a specific repository (github.com/<user>/<repo>)? */
export const isRepoLink = (url) => {
  try {
    const { hostname, pathname } = new URL(url);
    return (
      hostname === "github.com" &&
      pathname.split("/").filter(Boolean).length >= 2
    );
  } catch {
    return false;
  }
};

/** Short, human-readable form of a URL for the browser-frame address bar. */
export const displayUrl = (url) => {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
  } catch {
    return "";
  }
};

/** Two-letter monogram used when a project has no screenshot. */
export const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/**
 * Pointer handler for the `.spotlight` effect: stores the cursor position
 * (relative to the element) in CSS custom properties read by index.css.
 */
export const trackSpotlight = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
};
