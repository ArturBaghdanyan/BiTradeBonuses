import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import MainContainer from "./components/main";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";
import { ErrorPage } from "./pages/error";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { ResetPassword } from "./pages/reset";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/main", element: <MainContainer /> },
  { path: "/footer", element: <Footer /> },
  { path: "/account/resetpassword", element: <ResetPassword /> },
  { path: "/404", element: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
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
