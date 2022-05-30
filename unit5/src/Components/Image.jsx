export const Image = ({ src, alt, borderRadius, width, height, fit }) => {

  return (
    <div>
      <img src="./eye.svg"
      alt="eye" 
      style={{borderRadius:"6",width:"100px",height:"100px",fit:"cover"}}/>
    </div>
  );
};
