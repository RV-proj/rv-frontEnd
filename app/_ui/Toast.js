import { toast } from "react-toastify";

const Toast = ({ text, tostContent }) => {
  const notify = () => toast(tostContent);

  return (
    <>
      {/* button */}
      <button onClick={notify}>{text}</button>
    </>
  );
};

export default Toast;
