import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/Home/HomePage";
import About from "./components/Pages/About/About";
import StoreMain from "./components/Pages/Store/StoreMain";
import Navibar from "./components/Navibar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navibar />,
    children: [
      {path: "/", element: <HomePage />,},
      { path: "/about", element: <About /> },
      { path: "/store", element: <StoreMain /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
