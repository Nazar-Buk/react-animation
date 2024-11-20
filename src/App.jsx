import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./templates/Root";
import Home from "./pages/Home";
import Waves from "./pages/Waves";

import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/waves",
        element: <Waves />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<>Loading...</>} />;
}

export default App;
