import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./i18";

const router = createBrowserRouter([
  {
    path: "/:lang",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost isNewPost={false} />,
      },
      {
        path: "blog/new",
        element: <BlogPost isNewPost={true} />,
      },
      {
        path: "about",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/en/home" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/en/home" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
