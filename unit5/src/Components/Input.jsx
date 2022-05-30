export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  const handleChange=null;
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`}
      type="checkbox"
      onChange={handleChange}
       variant="filled"
       size="small"
       rightLogo={size+1}
       rightLogoOnClick={rightLogo}
       />
    </div>
  );
};
