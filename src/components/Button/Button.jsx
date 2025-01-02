import { useRipple } from "../../hooks/ripple";

const positions = {
  top: "flex-col",
  right: "flex-row-reverse",
  bottom: "flex-col-reverse",
  left: "flex-row",
};
function Button({ label, icon, iconPosition, className }) {
  useRipple();

  return (
    <button id="btn" name="btn" className={`rounded-md bg-cyan-500 p-2 pl-4 pr-3 drop-shadow-md flex justify-center items-center gap-1  ${positions[iconPosition]} hover:text-cyan-500 hover:bg-white border-cyan-500 border-2 border-solid overflow-hidden ${className}`}>
      {icon && <i>{icon}</i>}
      <label htmlFor="btn" className="cursor-pointer">
        {label}
      </label>
    </button>
  );
}

export default Button;
