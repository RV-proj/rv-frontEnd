const Toast = ({ text, style, clickData }) => {
  return (
    <>
      {/* button */}
      <button className={style} onClick={clickData}>
        {text}
      </button>
    </>
  );
};

export default Toast;
