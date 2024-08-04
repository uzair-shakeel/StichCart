import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/login/login";
import Home from "../containers/home/home";
import AboutUs from "../containers/about-us/about-us";
import ContactUs from "../containers/contact-us/contact-us";
import PrivacyPolicy from "../containers/privacy-policy/privacy-policy";
import Services from "../containers/Services/services";
import Works from "../containers/Works/works";
import UnauthLayout from "../layout/unauth-layout";

const router = createBrowserRouter([
  {
    element: <UnauthLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "how-it-works",
        element: <Works />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "why-choose-us",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
