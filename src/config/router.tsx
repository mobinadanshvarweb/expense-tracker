import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Chart from "../pages/chart/Chart";
import Reminder from "../pages/reminder/Reminder";
import Setting from "../pages/setting/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      { path: "/reminder", element: <Reminder /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
]);

export default router;
