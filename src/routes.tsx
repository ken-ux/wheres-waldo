import App from "./App";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Leaderboard from "./pages/Leaderboard";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "instructions", element: <Instructions /> },
      { path: "leaderboard", element: <Leaderboard /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
