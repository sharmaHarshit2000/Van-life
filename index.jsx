import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server.js";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetail, {
  loader as vanDetailLoader,
} from "./pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard, {
  loader as dashboardLoader,
} from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetail, {
  loader as hostVanDetail,
} from "./pages/Host/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";

import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login.jsx";
import { requiredAuth } from "./utils.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetail}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
