import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import MainContainer from "./components/main";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/main", element: <MainContainer /> },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
