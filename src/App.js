import Home from "./pages/home/Home";
import RecentWorks from "./pages/recentWorks/RecentWorks";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/works",
    element: <RecentWorks/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
