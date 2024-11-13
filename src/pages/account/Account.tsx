import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../../store/slice/account-slice";
import { useNavigate } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";
const Account = () => {
  const navigate = useNavigate();
  //   const name = useSelector((state: RootState) => state.account.account.name);
  const name = JSON.parse(localStorage.getItem("account") || "[]") || "";
  const dispatch = useDispatch();
  const [account, setAccount] = useState<{
    name: string;
    lastName: string;
    phoneNumber: string;
  }>({
    name: "",
    lastName: "",
    phoneNumber: "",
  });

  return (
    <div className="w-full min-h-screen flex justify-center items-start mb-4 ">
      <div className="w-[98%]  rounded-2xl bg-lightorangy shadow flex flex-col border-2 border-darky  px-5 py-14">
        <div className="w-full justify-center items-center flex ">
          <span className="w-28 h-28 rounded-full flex justify-center items-center bg-slate-300 backdrop-blur">
            +
          </span>
        </div>
        <div className="w-full flex justify-center items-center text-darky font-bold text-xl">
          {name.name} {name.lastName}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col gap-1 w-[90%]">
            <label className="text-darky font-bold" htmlFor="">
              Name
            </label>
            <input
              placeholder={`${name.name ? name.name : ""}`}
              value={account.name}
              onChange={(e) => {
                setAccount({ ...account, name: e.target.value });
                console.log("1");
              }}
              type="text"
              className="p-2 rounded-lg border-2 border-darky bg-easy"
            />
          </div>
          <div className="flex flex-col gap-1 w-[90%]">
            <label className="text-darky font-bold" htmlFor="">
              LastName
            </label>
            <input
              placeholder={`${name.lastName ? name.lastName : ""}`}
              value={account.lastName}
              onChange={(e) => {
                setAccount({ ...account, lastName: e.target.value });
                console.log("2");
              }}
              type="text"
              className="p-2 rounded-lg border-2 border-darky bg-easy"
            />
          </div>
          <div className="flex flex-col gap-1 w-[90%]">
            <label className="text-darky font-bold" htmlFor="">
              Phone Number
            </label>
            <input
              placeholder={`${name.phoneNumber ? name.phoneNumber : ""}`}
              value={account.phoneNumber}
              onChange={(e) => {
                setAccount({ ...account, phoneNumber: e.target.value });
              }}
              type="text"
              className="p-2 rounded-lg border-2 border-darky bg-easy"
            />
          </div>
        </div>
        <div className="w-full p-3 flex-col md:flex-row flex justify-center gap-4 items-center mt-8">
          <button
            onClick={() => {
              if (account.name != "" && account.lastName != "") {
                dispatch(addAccount(account));
              }
              setAccount({ name: "", lastName: "", phoneNumber: "" });
            }}
            className="w-40 md:w-fit bg-darky border-2 border-transparent text-white px-3 py-2 font-bold  flex justify-center items-center rounded-lg hover:bg-white hover:text-darky hover:border-2 hover:border-darky duration-300"
          >
            Save
          </button>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="w-40 md:w-fit bg-darkorangy border-2 border-transparent text-white px-3 py-2 font-bold  flex justify-center items-center rounded-lg hover:bg-white hover:text-darkorangy hover:border-2 duration-300 hover:border-darkorangy"
          >
            Cancle
          </button>
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default Account;
