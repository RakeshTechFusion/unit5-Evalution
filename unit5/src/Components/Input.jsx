import eye from "./eye.svg";
import "../App.css";

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input type={type} className={`input`} />
      <img style={{ marginLeft: "-30px" }} src={eye} alt="" />
    </div>
  );
};