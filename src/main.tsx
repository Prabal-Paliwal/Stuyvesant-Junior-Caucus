import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./index.css"
import App from "./App.tsx"
import Cabinet from "./Cabinet.tsx"
import Events from "./Events.tsx"
import Resources from "./Resources.tsx"
import Contacts from "./Contacts.tsx"
import Jprom from "./Jprom.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/cabinet",
    element: <Cabinet/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/resources",
    element: <Resources/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },
  {
    path: "/jprom",
    element: <Jprom/>,
  }
]);

const rootElement = document.getElementById('root')!; 
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
