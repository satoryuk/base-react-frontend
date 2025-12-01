import { createBrowserRouter } from "react-router-dom";
import RootContainer from "./layouts/root-container";
import HomePage from "./pages/home/home-page";
import ContactsPage from "./pages/contacts/contacts-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      }
    ],
  },
  {
    path: "/page-not-found",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default router;