import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./i18";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/blog",
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
