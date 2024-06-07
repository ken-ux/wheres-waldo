import App from "./App";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "instructions", element: <Instructions /> },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
