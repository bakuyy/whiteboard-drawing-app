import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Room from "../pages/Room";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;