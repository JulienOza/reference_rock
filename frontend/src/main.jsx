import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ContactForm from "./pages/ContactForm/ContactForm";
import BandMembers from "./pages/BandMembers/BandMembers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contactform",
    element: <ContactForm />,
  },
  {
    path: "/lineup",
    element: <BandMembers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
