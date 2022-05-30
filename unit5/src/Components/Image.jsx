export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img
        src={src}
        style={{ borderRadius: borderRadius, width: width, height: height }} alt={alt}
      />
    </div>
  );
};