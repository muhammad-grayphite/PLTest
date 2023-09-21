export const Button = ({ text, color, borderColor, bgColor, style }) => {
  return (
    <>
      <button type="button" className="btn btn-primary" style={style}>
        {text}
      </button>
    </>
  );
};
