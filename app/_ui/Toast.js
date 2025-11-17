import { toast } from "react-toastify";

const Toast = ({ text, tostContent, style, clickData }) => {
  // use clickdata logic
  if (clickData) {
    toast.success(tostContent);
  }

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
