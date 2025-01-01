import {
  Home,
  Booking,
  Payment,
  Profile,
  TimeTable,
  Login,
  Logout,
} from "./pages/index";

import {
  BookOpenText,
  CalendarDays,
  CircleDollarSign,
  HouseIcon,
  Settings,
} from "lucide-react";

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: HouseIcon,
        name: "Home",
        path: "/",
        element: <Home />,
      },
      {
        icon: CalendarDays,
        name: "TimeTable",
        path: "/timetable",
        element: <TimeTable />,
      },
      {
        icon: BookOpenText,
        name: "Booking",
        path: "/booking",
        element: <Booking />,
      },
      {
        icon: CircleDollarSign,
        name: "payment",
        path: "/payment",
        element: <Payment />,
      },
      {
        icon: Settings,
        name: "settings",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      { name: "Sign In", path: "/sign-in", element: <Login /> },
      { name: "Sign Up", path: "/sign-out", element: <Logout /> },
    ],
  },
];

export default routes;
