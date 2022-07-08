// import
import { useRoutes,Navigate } from 'react-router-dom';
import React, { Component, lazy } from 'react';

import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";

import SignIn from "views/Forms/UserLogin/SignIn.js";
import SignUp from "views/Forms/UserLogin/SignUp.js";
import SetPin from "views/Forms/UserLogin/SetPin.js";
import AuthLayout from './layouts/Auth';

import MainProfileForm from 'views/Forms/ProfileForm.js';
import EnterpriseProfile from 'components/Forms/ProfileForms/EnterpriseProfile';
import ProductProfile from 'components/Forms/ProfileForms/ProductProfile';
import TeamProfile from 'components/Forms/ProfileForms/TeamProfile';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";



// var dashRoutes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: <HomeIcon color='inherit' />,
//     component: Dashboard,
//     layout: "/admin",
//   },
//   {
//     path: "/tables",
//     name: "Tables",
//     icon: <StatsIcon color='inherit' />,
//     component: Tables,
//     layout: "/admin",
//   },
//   {
//     path: "/billing",
//     name: "Billing",
//     icon: <CreditIcon color='inherit' />,
//     component: Billing,
//     layout: "/admin",
//   },
//   {
//     name: "ACCOUNT PAGES",
//     category: "account",
//     state: "pageCollapse",
//     views: [
//       {
//         path: "/profile",
//         name: "Profile",
//         icon: <PersonIcon color='inherit' />,
//         secondaryNavbar: true,
//         component: Profile,
//         layout: "/admin",
//         views:[
          
//         ]
//       },
//       {
//         path: "/signin",
//         name: "Sign In",
//         icon: <DocumentIcon color='inherit' />,
//         component: SignIn,
//         layout: "/auth",
//       },
//       {
//         path: "/signup",
//         name: "Sign Up",
//         icon: <RocketIcon color='inherit' />,
//         component: SignUp,
//         layout: "/auth",
//       },
//       {
//         path: "/setpin",
//         name: "Set Pin",
//         icon: <DocumentIcon color='inherit' />,
//         component: SetPin,
//         layout: "/auth",
//       },
//       {
//         path: "/profileform",
//         name: "Profile Form",
//         icon: <DocumentIcon color='inherit' />,
//         component: MainProfileForm,
//         layout: "/auth",
//       },
//     ],
//   },
// ];
// export default dashRoutes;

export default function dashRoutes() {
  return useRoutes([
    {
      path:'/',
      element: <AuthLayout />,
      children: [
        {
          path: "/", element: <Navigate to="/signin" replace />
        },
        {
          path: "signin",
          element: <SignIn />
        },
        {
          path: "setPin",
          element: <SetPin />
        },
      ]
    },
    {
      path:'/profile',
      element: <MainProfileForm />,
      children: [
        
        {
          path: "enterprise",
          element: <EnterpriseProfile />
        },
        {
          path: "product",
          element: <ProductProfile />
        },
        {
          path: "team",
          element: <TeamProfile />
        },
      ]
    }
  ]);
}