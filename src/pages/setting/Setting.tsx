const Setting = () => {
  return (
    <div className="w-full py-8 flex flex-col bg-zinc-50 justify-center items-center gap-8">
      <div className="flex w-[80%] hover:bg-easy hover:border-darky hover:text-darkorangy font-bold rounded-2xl py-5 px-3 border-2 text-darky border-darkorangy bg-lightorangy">
        Delete All Reminder
      </div>
      <div className="flex w-[80%] hover:bg-easy hover:border-darky hover:text-darkorangy font-bold rounded-2xl py-5 px-3 border-2 text-darky border-darkorangy bg-lightorangy">
        Privacy and Security
      </div>
      <div className="flex w-[80%] hover:bg-easy hover:border-darky hover:text-darkorangy font-bold rounded-2xl py-5 px-3 border-2 text-darky border-darkorangy bg-lightorangy">
        Select Theme
      </div>
      <div className="flex w-[80%] hover:bg-easy hover:border-darky hover:text-darkorangy font-bold rounded-2xl py-5 px-3 border-2 text-darky border-darkorangy bg-lightorangy">
        Select Time Formmating
      </div>
    </div>
  );
};

export default Setting;
