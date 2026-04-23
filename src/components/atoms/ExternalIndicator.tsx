// Visually hidden helper appended to external links so screen readers announce
// the new-tab behavior. Renders nothing visible.
export function ExternalIndicator() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}
