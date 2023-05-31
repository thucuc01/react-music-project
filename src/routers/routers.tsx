import { RouteObject } from "react-router-dom";
import ListMusic from "../components/ListMusic";
import DetailMusic from "../components/DetailMusic";
import LoginPage from "../pages/LoginPage";
import DefaultLayout from "../layout/DefaultLayout";
import CreateMusic from "../components/CreateMusic";

interface IRoute {
  path: string;

  title: string;

  icon?: any;

  children?: IRoute[];

  component?: any;
}

const navRoutes: IRoute[] = [
  {
    path: "",

    title: "List",

    // icon: <UserOutlined />,

    component: <ListMusic />,
  },

  {
    path: "/top-10-all",

    title: "List",

    // icon: <UserOutlined />,

    component: <ListMusic page={"top10-all"} />,
  },

  {
    path: "/top-10-vn",

    title: "List",

    // icon: <UserOutlined />,

    component: <ListMusic page={"top10-vn"} />,
  },

  {
    path: "/top-10-us",

    title: "List",

    // icon: <UserOutlined />,

    component: <ListMusic page={"top10-us"} />,
  },

  {
    path: "/detail/:id",

    title: "Detail",

    // icon: <UserOutlined />,

    component: <DetailMusic />,
  },

  {
    path: "/create",

    title: "Create",

    component: <CreateMusic />,
  },
];

const getRoutes = function (rawRoutes: IRoute[]): RouteObject[] {
  const routes: RouteObject[] = [];

  for (let i = 0; i < rawRoutes.length; i++) {
    const rawRoute = rawRoutes[i];

    if (!rawRoute.children) {
      routes.push({
        path: rawRoute.path,

        element: rawRoute.component,
      });
    } else {
      routes.push(...getRoutes(rawRoute.children));
    }
  }

  console.log(routes);

  return routes;
};

const navRouters = getRoutes(navRoutes);

const browserRouters: RouteObject[] = [
  {
    path: "/login",

    element: <LoginPage />,

    errorElement: "Page not found1",
  },

  {
    path: "",

    element: <DefaultLayout />,

    errorElement: "Page not found2",

    children: navRouters,
  },
];

export { navRouters };

export type { IRoute };

export default browserRouters;
