import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdTableView ,
  MdNewspaper ,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FcAdvertising } from "react-icons/fc";
import { GrUserWorker } from "react-icons/gr"

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import Advert from "views/admin/advert";
import Blogs from "views/admin/blogs";
import Artisan from "views/admin/artisan";
import Visitors from "views/admin/visitors";
import Report from "views/admin/report";
import Settings from "views/admin/settings";
import User from "views/admin/user";


// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Vistors",
    layout: "/admin",
    icon: <Icon as={MdOutlinePersonOutline } width='20px' height='20px' color='inherit' />,
    path: "/visitor",
    component: Visitors,
  },
  {
    name: "Users",
    layout: "/admin",
    icon: <Icon as={MdOutlinePersonOutline } width='20px' height='20px' color='inherit' />,
    path: "/user",
    component: User,
  },
  {
    name: "Advertisement",
    layout: "/admin",
    icon: <Icon as={FcAdvertising} width='20px' height='20px' color='inherit' />,
    path: "/advert",
    component: Advert,
  },
  {
    name: "Artisan",
    layout: "/admin",
    icon: <Icon as={GrUserWorker} width='20px' height='20px' color='inherit' />,
    path: "/artisan",
    component: Artisan,
  },
  {
    name: "Blogs",
    layout: "/admin",
    icon: <Icon as={MdNewspaper } width='20px' height='20px' color='inherit' />,
    path: "/blogs",
    component: Blogs,
  },
  {
    name: "Settings",
    layout: "/admin",
    icon: <Icon as={GoGear} width='20px' height='20px' color='inherit' />,
    path: "/settings",
    component: Settings,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // }
];




export default routes;

 