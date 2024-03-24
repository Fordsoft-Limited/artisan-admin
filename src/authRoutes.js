import React from "react";
// import { Icon } from "@chakra-ui/react";
// import {
//   MdBarChart,
//   MdPerson,
//   MdHome,
//   MdLock,
//   MdTableView ,
//   MdNewspaper ,
//   MdOutlinePersonOutline,
// } from "react-icons/md";

import SignInCentered from "views/auth/signIn";
import ForgetPassword from "views/auth/forgetPassword/ForgetPassword";
import ResetPassword from "views/auth/resetpassword/ResetPassword";

const auths = [
    {
        name: "Sign In",
        layout: "/auth",
        path: "/sign-in",
        component: SignInCentered,
      },
      {
        name: "Forget Password",
        layout: "/auth",
        path: "/forgot-password",
        component: ForgetPassword,
      },
      {
        name: "Reset Password",
        layout: "/auth",
        path: "/reset-password",
        component: ResetPassword,
      },
]

export default auths;