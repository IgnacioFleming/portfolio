import { useRipple } from "../../hooks/useRipple";

const positions = {
  top: "flex-col",
  right: "flex-row-reverse",
  bottom: "flex-col-reverse",
  left: "flex-row",
};
function Button({ label, icon, iconPosition, className, type = "button" }) {
  useRipple();

  return (
    <button type={type} id="btn" name="btn" className={`rounded-md p-2 px-3 drop-shadow-md flex justify-center items-center gap-1  ${positions[iconPosition]} hover:text-cyan-500 hover:bg-white border-primary border-2 border-solid overflow-hidden  ${className}`}>
      {icon && <i>{icon}</i>}
      <label className="cursor-pointer">{label}</label>
    </button>
  );
}

export default Button;
