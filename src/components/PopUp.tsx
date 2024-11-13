import { PopUpProps } from "../type/pop-up-type";

const PopUp: React.FC<PopUpProps> = ({ text, yes, no }) => {
  return (
    <div className="w-full min-h-screen fixed top-0 left-0 backdrop-blur">
      <div className="fixed flex flex-col items-center justify-center pt-8 text-xl rounded-lg bg-white top-20 left-[50%] translate-x-[-50%] w-[90%] text-darky">
        Are you sure you want to <br />{" "}
        <span>
          <span className="text-[#800000]">Delete</span>{" "}
          <span className="font-bold">{text}</span> ?
        </span>
        <div className="w-full rounded-b-lg  bg-red-400 mt-6 flex items-center">
          <button
            onClick={yes}
            className="w-1/2 py-2 bg-darky rounded-bl-lg text-lightorangy border-r border-lightorangy flex justify-center items-center"
          >
            Yes
          </button>
          <button
            onClick={no}
            className="w-1/2 py-2 bg-[#800000] rounded-br-lg text-lightorangy border-l border-lightorangy flex justify-center items-center"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
