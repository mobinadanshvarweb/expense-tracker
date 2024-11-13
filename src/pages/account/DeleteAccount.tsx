import { useState } from "react";
import PopUp from "../../components/PopUp";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setPopup(true);
        }}
        className="w-40 md:w-fit bg-[#800000] border-2 border-transparent text-white px-3 py-2 font-bold  flex justify-center items-center rounded-lg hover:bg-white hover:text-[#800000] hover:border-2 hover:border-[#800000] duration-300"
      >
        Delete Account
      </button>
      {popup && (
        <PopUp
          text=" Your Account"
          no={() => {
            setPopup(false);
          }}
          yes={() => {
            localStorage.clear();
            setPopup(false);
            navigate("/signup");
          }}
        />
      )}
    </>
  );
};

export default DeleteAccount;
