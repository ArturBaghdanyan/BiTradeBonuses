import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import MainContainer from "./components/main";

import "./App.css";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutPage /> },
  {path: '/contact', element: <ContactPage />},
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
