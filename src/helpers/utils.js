export const eventChangeColor = ({ color, revert = false } = {}) => {
  if (revert) return (e) => (e.currentTarget.style.color = "currentColor");
  return (e) => (e.currentTarget.style.color = color);
};
