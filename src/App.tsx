import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  const location = useLocation();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full lg:w-[50%] border rounded flex flex-col h-screen relative">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className=" fixed bottom-0 left-0 flex justify-between p-3 w-full bg-darky">
          <Navigation
            icon="/icon/home.svg"
            isActive={location.pathname.endsWith("home")}
            text="Home"
            path="/home"
          />
          <Navigation
            icon="/icon/chart.svg"
            isActive={location.pathname.endsWith("chart")}
            text="Chart"
            path="/chart"
          />
          <Navigation
            icon="/icon/reminder.svg"
            isActive={location.pathname.endsWith("reminder")}
            text="Reminder"
            path="/reminder"
          />
          <Navigation
            icon="/icon/setting.svg"
            isActive={location.pathname.endsWith("setting")}
            text="Setting"
            path="setting"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
